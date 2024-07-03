import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'MealsLayout metadata',
    description: ''
}

type Props = {
    children: React.ReactNode
}

const MealsLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MealsLayout;
