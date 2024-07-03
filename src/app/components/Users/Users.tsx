import {FC} from 'react';
import {User} from "@/app/components";
import {IUser} from "@/app/interfaces";

interface IProps {
users:IUser[]
}

const Users: FC<IProps> = ({users}) => {
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}

        </div>
    );
};

export {Users};