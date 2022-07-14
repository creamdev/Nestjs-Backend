import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { tagProviders } from './tag.providers';
import { TagService } from './tag.service';

@Module({
  controllers: [TagController],
  providers: [TagService,...tagProviders],
  exports:[TagService]
})
export class TagModule {}
