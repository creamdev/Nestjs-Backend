export class CreateBlogPostDto{
    title: string;
    description: string;
    userId: number;
    tags: Array<number>;
}