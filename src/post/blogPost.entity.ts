import { BelongsTo, BelongsToMany, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { User } from "src/user/user.entity";
import { Tag } from "../tag/tag.entity";
import { PostTag } from "../post-tag/posttag.entity";
import { Comment } from "src/comment/comment.entity";

@Table
export class BlogPost extends Model<BlogPost>{
    @Column
    title: string;

    @Column
    description: string;

    @HasMany(()=>Comment)
    comments: Comment[];
    
    @BelongsToMany(
        ()=> Tag , 
        ()=> PostTag)
    tags: Tag[];

    @ForeignKey(()=>User)
    @Column
    userId: number;

    @BelongsTo(()=>User)
    user: User;
}