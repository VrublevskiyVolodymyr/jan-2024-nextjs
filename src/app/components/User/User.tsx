"use client";

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { IUser } from '../../interfaces';
import styles from './user.module.css';

interface IProps {
    user: IUser;
}

const User: FC<IProps> = ({ user }) => {
    const router = useRouter();

    const handleNavigate = () => {
        router.push(`/users/${user.id}/posts`);
    };

    return (
        <div className={styles.userCard}>
            <h2>{user.name}</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <div className={styles.address}>
                <p><strong>Address:</strong></p>
                <p>{user.address.street}, {user.address.suite}</p>
                <p>{user.address.city}, {user.address.zipcode}</p>
                <p>Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>
            </div>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
            <div className={styles.company}>
                <p><strong>Company:</strong> {user.company.name}</p>
                <p>{user.company.catchPhrase}</p>
                <p>{user.company.bs}</p>
            </div>
            <button className={styles.button} onClick={handleNavigate}>Get posts of user</button>
        </div>
    );
};

export { User };
