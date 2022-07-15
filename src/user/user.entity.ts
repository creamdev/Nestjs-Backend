
import { Table , Model , Column, HasMany} from "sequelize-typescript";
import { Comment } from "src/comment/comment.entity";
import { BlogPost } from "src/post/blogPost.entity";


@Table
export class User extends Model<User> {
    @Column
    email: string;

    @Column
    password: string;

    @HasMany(()=>BlogPost)
    posts: BlogPost[];

    @HasMany(()=> Comment)
    comments: Comment[];
}