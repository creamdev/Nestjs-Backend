import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { commentProviders } from './comment.providers';
import { CommentService } from './comment.service';

@Module({
  controllers: [CommentController],
  providers: [CommentService,...commentProviders]
})
export class CommentModule {}
