import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { CreateBlogPostDto } from './dto/create-blogPost.dto';
import { BlogPost } from './blogPost.entity';
import { PostService } from './post.service';
import { User } from 'src/user/user.entity';




@Controller('post')
export class PostController {

    constructor(
        private postService:PostService,
        ) {}

    @Post('')
    @UseGuards(JwtAuthGuard)
    async create(@Body() createPostDto:CreateBlogPostDto,@Request() req ): Promise<BlogPost> {
       return this.postService.create(req.user,createPostDto);
    }

    @Get('')
    getall(): Promise<BlogPost[]> {
        return this.postService.getall();
    }

    @Get(':id')
    getBlogPost(@Param('id') id:number): Promise<BlogPost> {
        return this.postService.getBlogPost(id);
    }

    @Delete(':id')
    deletePost(@Param('id') id:number){ 
        return this.postService.deletePost(id);
    }




}
