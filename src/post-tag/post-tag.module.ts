import { Module } from '@nestjs/common';
import { PostTagService } from './post-tag.service';
import { postTagProviders } from './postTag.providers';

@Module({
  providers: [PostTagService,...postTagProviders],
  exports:[PostTagService,...postTagProviders]
})
export class PostTagModule {}
