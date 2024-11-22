import { UserName } from './UserName';
import { UserEmail } from './UserEmail';
import { UserAge } from './UserAge';
import { UserAvatar } from './UserAvatar';
import { UserRoles } from './UserRoles';

type Props = {
    name: string;
    email: string;
    age: number;
    avatar: string;
    roles: {id: number, title: string}[]
}

export const UserInfo = ( props: Props ) => {
    return (
        <>  
            <UserAvatar
                // src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                src = {props.avatar}
            />
            <UserName
                name = {props.name}
            />
            <UserEmail 
                email = {props.email}
            />
            <UserAge 
                age = {props.age}
            />
            <UserRoles 
                roles = {props.roles}
            />
        </>
    )
}
