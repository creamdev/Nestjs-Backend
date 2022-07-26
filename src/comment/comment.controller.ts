import { Body, Controller, Delete, Param, Post, Request, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-Comment.dto';
import {Comment} from './comment.entity'
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';

@Controller('comment')
export class CommentController {
    constructor(private commentService:CommentService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    async createComment(@Body() comment:CreateCommentDto , @Request() req):Promise<Comment>{
        return await this.commentService.createComment(req.user,comment);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async deleteComment(@Param('id') id:number,@Request() req){
        return await this.commentService.deleteComment(id,req.user);
    }

    
}
