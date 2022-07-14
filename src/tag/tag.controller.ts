import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { Tag } from './tag.entity';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
    constructor(private tagService:TagService) {}

    @Post('')
    async createTag(@Body() createTagDto:CreateTagDto){
       return await this.tagService.create(createTagDto);
    }

    @Get('')
    getalltags(){
        return this.tagService.getall();
    }

    @Get(':id')
    getTag(@Param('id') id:number):Promise<Tag>{
       return this.tagService.getTag(id);
    }

    @Delete(':id')
    deleteTag(@Param('id') id:number){
        return this.tagService.deleteTag(id);
    }

}
