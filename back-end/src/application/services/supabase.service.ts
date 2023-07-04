import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { createCanvas, loadImage } from 'canvas';
import { encode } from 'blurhash';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      `${process.env.SUPABASE_URL}`,
      `${process.env.SUPABASE_KEY}`,
    );
  }

  async create(
    fileName: string,
    bucketName: string,
    file: Buffer,
    fileType?: string,
  ) {
    const { data, error } = await this.supabase.storage
      .from(bucketName)
      .upload(fileName, file, {
        contentType: fileType,
      });

    if (error) throw new InternalServerErrorException(console.log(error));

    return { data, error };
  }

  async findOne(fileName: string, bucketName: string) {
    const { data, error } = await this.supabase.storage
      .from(bucketName)
      .download(fileName);

    if (error) throw new InternalServerErrorException('Error in file access');

    return data;
  }

  async remove(fileName: string, bucketName: string) {
    const { data, error } = await this.supabase.storage
      .from(bucketName)
      .remove([fileName]);

    if (error) throw new InternalServerErrorException('Error removing file');

    return { data, error };
  }

  async getURL(fileName: string) {
    const { data, error } = await this.supabase.storage
      .from('NewsImages')
      .createSignedUrl(fileName, 120);

    if (error) throw new InternalServerErrorException('Error in file access');

    return data.signedUrl;
  }

  async encodeImage(url: string) {
    const image = await loadImage(url);
    const canvas = createCanvas(image.width / 4, image.height / 4);
    const context = canvas.getContext('2d');

    context.drawImage(image, 0, 0);

    const imageData = context.getImageData(0, 0, image.width, image.height);

    return encode(imageData.data, imageData.width, imageData.height, 4, 4);
  }

  async getFileURL(fileName: string, bucketName: string) {
    const { data, error } = await this.supabase.storage
      .from(bucketName)
      .createSignedUrl(fileName, 120);

    if (error) throw new InternalServerErrorException('Error in file access');

    return data.signedUrl;
  }

  // async updateFile(bucketName: string, url: string, update) {
  //   const { data, error } = await this.supabase
  //     .from(bucketName)
  //     .update(update)
  //     .eq('URL', url);

  //   if (error) {
  //     throw new Error(error.message);
  //   }

  //   return data;
  // }
}
