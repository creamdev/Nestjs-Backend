import { PostTag } from "src/post-tag/posttag.entity"


export const postTagProviders = [
    {
        provide: 'POSTTAG_REPOSITORY',
        useValue: PostTag,
    }
]