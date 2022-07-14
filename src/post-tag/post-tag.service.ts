import { Inject, Injectable } from '@nestjs/common';
import { PostTag } from 'src/post-tag/posttag.entity';

@Injectable()
export class PostTagService {
    constructor(
        @Inject('POSTTAG_REPOSITORY')
        private readonly postTagRepository: typeof PostTag,
    ){}

    async create(postTag: PostTag) {
        await this.postTagRepository.create(postTag);
    }
}
