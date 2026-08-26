import { Module } from '@nestjs/common';
import { BusinessCardResolver } from './business-card.resolver';
import { BusinessCardService } from './business-card.service';

@Module({
  providers: [BusinessCardResolver, BusinessCardService],
})
export class BusinessCardModule {}
