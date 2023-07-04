import { Test, TestingModule } from '@nestjs/testing';
import { SupabaseService } from '../../../src/application/services/supabase.service';
import * as dotenv from 'dotenv';
import { InternalServerErrorException } from '@nestjs/common';
import * as fs from 'fs-extra';

describe('SupabaseService', () => {
  let service: SupabaseService;

  beforeEach(async () => {
    dotenv.config();
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupabaseService],
    }).compile();

    service = module.get<SupabaseService>(SupabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a file', async () => {
    const fileBuffer = await fs.readFile('test/assets/fileExemple.txt');

    expect(await service.create('fileExemple.txt', 'TestFiles', fileBuffer))
      .resolves;
  });

  it('should find a file', async () => {
    const fileName = 'fileExemple.txt';

    expect(await service.findOne(fileName, 'TestFiles')).resolves;
  });

  it('should return a error when a file is not found', async () => {
    const fileName = 'fileExemple1.txt';

    await expect(service.findOne(fileName, 'TestFiles')).rejects.toThrow(
      InternalServerErrorException,
    );
  });

  it('should remove a file', async () => {
    const fileName = 'fileExemple.txt';

    expect(await service.remove(fileName, 'TestFiles')).resolves;
  });

  it('should return a string URL', async () => {
    const fileName = 'imageTest.png';

    expect(await service.getURL(fileName)).resolves;
  });

  it('should return a blurhash of a URL', async () => {
    const imageURL = await service.getURL('imageTest.png');

    expect(await service.encodeImage(imageURL)).resolves;
  });

  it('should return a error when URL is not found', async () => {
    const fileName = 'fileExemple1.png';

    await expect(service.getURL(fileName)).rejects.toThrow(
      InternalServerErrorException,
    );
  });
});
