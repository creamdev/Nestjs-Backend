import { Table , Model , Column} from "sequelize-typescript";


@Table
export class User extends Model<User> {
    @Column
    email: string;

    @Column
    password: string;
}