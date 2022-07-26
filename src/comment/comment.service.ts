import { BadRequestException, Inject, Injectable } from '@nestjs/common';
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

    // Get Find one comment
    async findOne(id: number): Promise<Comment> {
        const comment = await this.commentRepository.findOne({
            where: { id: id },
            include: [{ model: User }],
        });
        return comment
    }

    // Delete comment
    async deleteComment(id: number,user:User){
        this.findOne(id).then(comment => {
            if(comment.userId != user.id){
                throw new BadRequestException('You are not authorized to delete this comment');
            }
        })
        return await this.commentRepository.destroy({
            where: {
                id,
            },
        });
    }
}


 



