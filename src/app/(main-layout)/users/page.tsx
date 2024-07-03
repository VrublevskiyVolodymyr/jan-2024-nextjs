
import {BackButton, Users} from '@/app/components';
import { userService } from '@/app/services/user.service';
import { IUser } from '@/app/interfaces';

interface IProps {
    users: IUser[];
}

const UsersPage: () => Promise<JSX.Element> = async () => {
    const { data } = await userService.getAllUsers();


    return (
        <div>
            <Users users={data} />
            <BackButton/>
        </div>
    );
};

export default UsersPage;
