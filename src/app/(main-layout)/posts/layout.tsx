import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Posts metadata',
    description: 'Show all posts'
}

type Props = {
    children: React.ReactNode
}

const PostsLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default PostsLayout;
