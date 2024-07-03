import {FC} from 'react';
import {IComment} from "@/app/interfaces";
import {Comment} from "@/app/components";


interface IProps {
comments:IComment[]
}

const Comments: FC<IProps> = ({comments}) => {

    return (
        <div>
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};