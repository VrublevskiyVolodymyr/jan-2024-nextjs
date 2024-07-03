'use client'
import {FC} from 'react';
import {useRouter} from "next/navigation";

import styles from './button.module.css';
interface IProps {

}

const BackButton: FC<IProps> = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <button className={styles.button} onClick={handleBack}>Back</button>
    );
};

export {BackButton};