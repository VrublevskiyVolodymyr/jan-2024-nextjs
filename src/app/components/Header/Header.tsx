"use client";

import { FC } from 'react';
import Link from 'next/link';
import {usePathname} from "next/navigation";

import styles from './Header.module.css';
interface IProps {

}

const Header: FC<IProps> = () => {
    const pathname = usePathname();

    return (

        <div className={styles.headerContainer}>
            <div className={styles.logo}>MyWebsite</div>
            <nav className={styles.navLinks}>
                <Link href={'/home'} className={pathname === '/home' ? `${styles.navLink} ${styles.active}` : styles.navLink}>Home</Link>
                <Link href={'/users'} className={pathname === '/users' ? `${styles.navLink} ${styles.active}` : styles.navLink}>Users</Link>
                <Link href={'/comments'} className={pathname === '/comments' ? `${styles.navLink} ${styles.active}` : styles.navLink}>Comments</Link>
                <Link href={'/posts'} className={pathname === '/posts' ? `${styles.navLink} ${styles.active}` : styles.navLink}>Posts</Link>
                <Link href={'/meals'} className={pathname === '/meals' ? `${styles.navLink} ${styles.active}` : styles.navLink}>Meals</Link>
            </nav>
        </div>


        // <div className={styles.headerContainer}>
        //     <div className={styles.logo}>MyWebsite</div>
        //     <nav className={styles.navLinks}>
        //         <Link href={'/home'} className={styles.navLink}>Home</Link>
        //         <Link href={'/users'} className={styles.navLink}>Users</Link>
        //         <Link href={'/comments'} className={styles.navLink}>Comments</Link>
        //         <Link href={'/posts'} className={styles.navLink}>Posts</Link>
        //     </nav>
        // </div>
    );
};

export { Header };
