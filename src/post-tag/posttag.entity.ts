import { ForeignKey, Model, Table , Column} from "sequelize-typescript";
import { BlogPost } from "../post/blogPost.entity";
import { Tag } from "../tag/tag.entity";

@Table
export class PostTag extends Model<PostTag> {
    @ForeignKey(()=>BlogPost)
    @Column
    postId: number;

    @ForeignKey(()=>Tag)
    @Column
    tagId: number;
}