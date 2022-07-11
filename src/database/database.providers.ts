import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/auth/auth.entity';

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
            sequelize.addModels([User]);
            await sequelize.sync() 
            return sequelize;
        }
    }
];