import {FC} from 'react';

import {Error} from "@/app/components";

interface IProps {

}

const NotFound: FC<IProps> = () => {
    const errorMessage: string = "Something went wrong! Please try again later or enter correct url.";

    return (
        <div>
            <Error message={errorMessage}/>
        </div>
    );
}

export default NotFound;