import { FC } from 'react';
import { Metadata } from "next";
import { commentService } from "@/app/services/comment.service";
import {BackButton, Comments} from "@/app/components";

export const metadata: Metadata = {
    title: "PostComments",
};

interface IProps {
    params: { id: string }
}

const CommentsPageById: FC<IProps> = async ({ params: { id } }) => {
   const { data } = await commentService.getAllCommentsOfPost(+id);

    return (
        <div>
            <Comments comments={data}/>
            <BackButton/>
        </div>
    );
};

export default CommentsPageById;
