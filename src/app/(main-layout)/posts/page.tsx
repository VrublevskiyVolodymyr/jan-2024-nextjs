import {FC, PropsWithChildren} from 'react';
import {Posts} from "@/app/components";
import {postService} from "@/app/services/post.service";

interface IProps extends PropsWithChildren {

}

const PostsPage: FC<IProps> = async () => {
    const {data} = await postService.getAllPosts();
    return (
        <div>
            <Posts posts={data}/>
        </div>
    );
};

export default PostsPage;