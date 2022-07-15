import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './tag.entity';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
    constructor(private tagService:TagService) {}

    @Post('')
    @UseGuards(JwtAuthGuard)
    async createTag(@Body() dto:CreateTagDto){
       return await this.tagService.create(dto);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard)
    async updateTag(@Body() dto:UpdateTagDto,@Param('id') id:number){
        return await this.tagService.update(dto,id);
    }
    @Get('')
    @UseGuards(JwtAuthGuard)
    getalltags(){
        return this.tagService.getall();
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    getTag(@Param('id') id:number):Promise<Tag>{
       return this.tagService.getTag(id);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    deleteTag(@Param('id') id:number){
        return this.tagService.deleteTag(id);
    }

}
