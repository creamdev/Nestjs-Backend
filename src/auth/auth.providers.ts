import { User } from "./auth.entity"

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useValue: User,
    }
]