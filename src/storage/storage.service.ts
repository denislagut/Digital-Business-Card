import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UploadUrl } from './models/upload-url.model';

@Injectable()
export class StorageService {
  constructor(private readonly configService: ConfigService) {}

  buildResumeUploadTarget(fileName: string): UploadUrl {
    const bucket = this.configService.getOrThrow<string>('S3_BUCKET');
    const endpoint = this.configService.getOrThrow<string>('S3_ENDPOINT');
    const normalizedName = fileName.replace(/[^a-zA-Z0-9._-]/g, '-').toLowerCase();
    const key = `resumes/${Date.now()}-${normalizedName}`;

    return {
      bucket,
      key,
      endpoint,
      publicUrl: `${endpoint}/${bucket}/${key}`,
    };
  }

  getStorageConfig() {
    return {
      region: this.configService.getOrThrow<string>('S3_REGION'),
      endpoint: this.configService.getOrThrow<string>('S3_ENDPOINT'),
      bucket: this.configService.getOrThrow<string>('S3_BUCKET'),
    };
  }
}
