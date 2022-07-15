import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './tag.entity';

@Injectable()
export class TagService {
    constructor(
        @Inject('TAG_REPOSITORY')
        private readonly tagRepository: typeof Tag,
    ) {}

    async create(dto:CreateTagDto):Promise<Tag>{
        return await this.tagRepository.create({name:dto.name});
    }

    async update(dto:UpdateTagDto,id:number ):Promise<Tag>{
        const updateTag = await this.tagRepository.findOne({
            where: { id: id },
        });
        if(!updateTag){
            throw new BadRequestException('Tag not found');
        }
        updateTag.name=dto.name;
        await this.tagRepository.update(updateTag,{where:{id:dto.id}});
        return updateTag;
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
