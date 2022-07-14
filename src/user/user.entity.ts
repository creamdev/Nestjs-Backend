
import { Table , Model , Column, HasMany} from "sequelize-typescript";
import { BlogPost } from "src/post/blogPost.entity";


@Table
export class User extends Model<User> {
    @Column
    email: string;

    @Column
    password: string;

    @HasMany(()=>BlogPost)
    posts: BlogPost[];
}