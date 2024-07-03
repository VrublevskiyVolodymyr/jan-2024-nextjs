"use client";

import React, {FC} from 'react';
import {IPost} from "../../interfaces";

import styles from './post.module.css';
import {useRouter} from "next/navigation";

interface IProps {
    post:IPost;
}

type IPropsType = IProps & { children?: React.ReactNode };

const Post: FC<IPropsType> = ({post}) => {
    const router = useRouter();

    const handleNavigate = () => {
        router.push(`/posts/${post.id}/comments`);
    };
    return (
        <div className={styles.postContainer}>
            <div className={styles.postTitle}>{post.title}</div>
            <div className={styles.postBody}>{post.body}</div>
            <div className={styles.postFooter}>
                <span>Post ID: {post.id}</span>
                <span>User ID: {post.userId}</span>
            </div>
            <button className={styles.button} onClick={()=> handleNavigate()}>Get comments of post</button>
        </div>
    );
};

export {Post};