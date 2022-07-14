import { BlogPost } from "./blogPost.entity";

export const blogPostProviders = [
    {
        provide: 'BLOGPOST_REPOSITORY',
        useValue: BlogPost,
    }
]