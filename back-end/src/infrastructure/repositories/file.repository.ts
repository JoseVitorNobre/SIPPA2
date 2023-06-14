import { Injectable } from "@nestjs/common";
import { SupabaseService } from "src/application/services/supabase.service";

@Injectable()
export class FileRepository {
  constructor(private readonly supabaseService: SupabaseService) {}

  async createFile(fileName: string, bucketName: string, file: Buffer): Promise<any> {
    const { data, error } = await this.supabaseService.create(fileName, bucketName, file)

    if (error) {
      throw new Error('Failed to create file');
    }

    return data;
  }

  async deleteFile(fileName: string, bucketName: string): Promise<void> {
    const { error } = await this.supabaseService.remove(fileName, bucketName);

    if (error) {
      throw new Error('Failed to delete file');
    }
  }

  async readFile(fileName: string, bucketName: string): Promise<any> {
    const data = await this.supabaseService.findOne(fileName, bucketName);

    return data;
  }
}