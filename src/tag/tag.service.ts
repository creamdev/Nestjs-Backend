import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { Tag } from './tag.entity';

@Injectable()
export class TagService {
    constructor(
        @Inject('TAG_REPOSITORY')
        private readonly tagRepository: typeof Tag,
    ) {}

    async create(createTagDto:CreateTagDto):Promise<Tag>{
        return await this.tagRepository.create({name:createTagDto.name});
    }

    async getall():Promise<Tag[]>{
        return await this.tagRepository.findAll();
    }

    async getTag(id:number):Promise<Tag>{
        return await this.tagRepository.findByPk(id);
    }

    async getTagsByIds(ids:Array<number>): Promise<Array<Tag>> {
        return await this.tagRepository.findAll({where:{id:ids}});
    }

    deleteTag(id:number){
        return this.getTag(id).then(tags=>{
            if(!tags){
                throw new BadRequestException('Tag not found');
            }
            return this.tagRepository.destroy({where:{id:id}})
        }) 
    }

}
