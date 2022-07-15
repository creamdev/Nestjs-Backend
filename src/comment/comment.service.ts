import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './dto/create-Comment.dto';

@Injectable()
export class CommentService {

    constructor(    
    @Inject('COMMENT_REPOSITORY')
    private readonly commentRepository: typeof Comment){}

    async createComment(user:User, comment: CreateCommentDto):Promise<Comment> {
        console.log(user)
        return await this.commentRepository.create({
            text: comment.text,
            postId: comment.postId,
            userId: user.id,
        });
    }

}


 



