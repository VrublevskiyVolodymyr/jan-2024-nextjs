import {FC} from 'react';
import {IPost} from "@/app/interfaces";
import {Post} from "@/app/components";

interface IProps {
posts:IPost[]
}

const Posts: FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts && posts.map(post=> <Post key={post.id} post={post}/>) }
        </div>
    );
};

export {Posts};