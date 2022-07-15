export class UpdateBlogPostDto{
    id:number;
    title: string;
    description: string;
    userId: number;
    tags: Array<number>;
}