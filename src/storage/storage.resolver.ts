import { Args, Query, Resolver } from '@nestjs/graphql';
import { UploadUrl } from './models/upload-url.model';
import { StorageService } from './storage.service';

@Resolver(() => UploadUrl)
export class StorageResolver {
  constructor(private readonly storageService: StorageService) {}

  @Query(() => UploadUrl, {
    description: 'Returns S3-compatible upload target metadata for a resume asset.',
  })
  resumeUploadTarget(@Args('fileName') fileName: string) {
    return this.storageService.buildResumeUploadTarget(fileName);
  }
}
