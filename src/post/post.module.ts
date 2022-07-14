import { Module } from '@nestjs/common';
import { PostTagModule } from 'src/post-tag/post-tag.module';
import { TagModule } from 'src/tag/tag.module';
import { PostController } from './post.controller';
import { blogPostProviders } from './post.providers';
import { PostService } from './post.service';

@Module({
  imports:[TagModule,PostTagModule],
  controllers: [PostController],
  providers: [PostService,...blogPostProviders],
})
export class PostModule {}
