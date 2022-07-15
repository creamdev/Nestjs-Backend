import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { TagModule } from './tag/tag.module';
import { PostTagModule } from './post-tag/post-tag.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [AuthModule, DatabaseModule, PostModule, UserModule, TagModule, PostTagModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
