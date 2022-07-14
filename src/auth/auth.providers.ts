import { User } from "../user/user.entity"

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useValue: User,
    }
]