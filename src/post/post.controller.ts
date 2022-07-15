import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Put, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { CreateBlogPostDto } from './dto/create-blogPost.dto';
import { BlogPost } from './blogPost.entity';
import { PostService } from './post.service';
import { UpdateBlogPostDto } from './dto/update-blogPost.dto';




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

    @Patch(':id')
    @UseGuards(JwtAuthGuard)
    async updatePost(@Body() updateBlogPostDto:UpdateBlogPostDto,@Param('id') id:number):Promise<BlogPost>{
        return await this.postService.update(updateBlogPostDto,id);
    }

    @Get('')
    @UseGuards(JwtAuthGuard)
    getall(): Promise<BlogPost[]> {
        return this.postService.getall();
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    getBlogPost(@Param('id') id:number): Promise<BlogPost> {
        return this.postService.getBlogPost(id);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    deletePost(@Param('id') id:number){ 
        return this.postService.deletePost(id);
    }




}
