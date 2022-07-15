import { Column, Table ,Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import { BlogPost } from "src/post/blogPost.entity";
import { User } from "src/user/user.entity";



@Table
export class Comment extends Model<Comment>{
    @Column
    text: string;

    @ForeignKey(()=>User)
    @Column
    userId:number;

    @BelongsTo(()=>User)
    user: User;

    @ForeignKey(()=>BlogPost)
    @Column
    postId: number;

    @BelongsTo(()=>BlogPost)
    post: BlogPost;

}