import { UserName } from './UserName';
import { UserEmail } from './UserEmail';
import { UserAge } from './UserAge';
import { UserAvatar } from './UserAvatar';
import { UserRoles } from './UserRoles';

type Props = {
    name: string;
    email: string;
    age: number;
    avatar?: string;
    roles: {id: number, title: string}[]
}

export const UserInfo = ({ name, email, age, roles, avatar = "https://img.favpng.com/17/24/10/computer-icons-user-profile-male-avatar-png-favpng-jhVtWQQbMdbcNCahLZztCF5wk.jpg"}: Props ) => {
    return (
        <>  
            <UserAvatar
                // src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                src = {avatar}
            />
            <UserName
                name = {name}
            />
            <UserEmail 
                email = {email}
            />
            <UserAge 
                age = {age}
            />
            <UserRoles 
                roles = {roles}
            />
        </>
    )
}
