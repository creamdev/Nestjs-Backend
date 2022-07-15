import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Tag } from 'src/tag/tag.entity';
import { CreateBlogPostDto } from './dto/create-blogPost.dto';
import { BlogPost } from './blogPost.entity';
import { PostTag } from '../post-tag/posttag.entity';
import { User } from 'src/user/user.entity';
import { UpdateBlogPostDto } from './dto/update-blogPost.dto';

@Injectable()
export class PostService {
  constructor(
    @Inject('BLOGPOST_REPOSITORY')
    private readonly blogPostRepository: typeof BlogPost,
    @Inject('POSTTAG_REPOSITORY')
    private readonly postTagRepository: typeof PostTag,
  ) {}

  async create(
    user: User,
    createBlogPostDto: CreateBlogPostDto,
  ): Promise<BlogPost> {
    const result = await this.blogPostRepository.create({
      title: createBlogPostDto.title,
      description: createBlogPostDto.description,
      userId: user.id,
    });
    const postTags: Array<PostTag> = [];
    for (var i = 0; i < createBlogPostDto.tags.length; i++) {
      var object: PostTag = {
        postId: result.id,
        tagId: createBlogPostDto.tags[i],
      } as PostTag;
      postTags.push(object);
    }
    await this.postTagRepository.bulkCreate(postTags);

    return result;
  }

  async update(
    updateBlogPostDto: UpdateBlogPostDto,
    id:number
  ):Promise<BlogPost>{
    const updatePost = await this.blogPostRepository.findOne({
      where: { id: id },
      include: [{ model: User }, { model: Tag }],
    });
    if (!updatePost) {
      throw new NotFoundException('Post not found');
    }
    updatePost.title = updateBlogPostDto.title;
    updatePost.description = updateBlogPostDto.description;
    await this.blogPostRepository.update(updatePost, {
      where: { id: updateBlogPostDto.id },
    });
    return updatePost;
  }

  getall(): Promise<BlogPost[]> {
    return this.blogPostRepository.findAll({
      include: [{ model: User }, { model: Tag }],
    });
  }

  getBlogPost(id: number): Promise<BlogPost> {
    return this.blogPostRepository.findOne({
      where: { id: id },
      include: [{ model: User }, { model: Tag }],
    });
  }

  deletePost(id:number){
    return this.getBlogPost(id).then(post=>{
        if(!post){
            throw new BadRequestException('Post not found');
        }
        return this.blogPostRepository.destroy({where:{id:id}});
    })

   
  }
}
