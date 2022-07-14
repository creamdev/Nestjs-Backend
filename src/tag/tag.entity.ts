import { Table , Column, Model, BelongsToMany } from "sequelize-typescript";
import { BlogPost } from "../post/blogPost.entity";
import { PostTag } from "../post-tag/posttag.entity";


@Table
export class Tag extends Model<Tag> {
    @Column
    name: string;

    @BelongsToMany(()=> BlogPost , ()=> PostTag)
    posts: BlogPost[];
}