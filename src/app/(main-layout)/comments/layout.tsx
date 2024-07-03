import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Comments metadata',
    description: 'show all comments'
}

type Props = {
    children: React.ReactNode
}

const CommentsLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default CommentsLayout;
