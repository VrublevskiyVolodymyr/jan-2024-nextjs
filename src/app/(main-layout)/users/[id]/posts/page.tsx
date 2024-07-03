import { PropsWithChildren} from 'react';
import {Metadata} from "next";
import {postService} from "@/app/services/post.service";
import {Posts} from "@/app/components";

export const metadata: Metadata = {
    title: "UserPosts",
};
interface IProps extends PropsWithChildren {
    params: { id: string }
}

const PostPageById: ({params: {id}}: { params: { id: string } }) => Promise<JSX.Element> = async ({params: {id}}) => {
    const {data} = await postService.getAllPostsOfUser(+id)
    return (
        <div>
            <Posts posts={data}/>
        </div>
    );
};

export default PostPageById;