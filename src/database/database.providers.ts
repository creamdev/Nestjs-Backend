import { Sequelize } from 'sequelize-typescript';
import { BlogPost } from 'src/post/blogPost.entity';
import { PostTag } from 'src/post-tag/posttag.entity';
import { Tag } from 'src/tag/tag.entity';
import { User } from 'src/user/user.entity';

export const databaseProviders = [
    {
        provide:'SEQUELIZE',
        useFactory : async  ()  => {
            const sequelize = new Sequelize ({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'backend',
            })
            sequelize.addModels([User,Tag,BlogPost,PostTag]);
            await sequelize.sync() 
            return sequelize;
        }
    }
];