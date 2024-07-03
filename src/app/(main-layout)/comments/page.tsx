import {Comments} from "@/app/components";
import {commentService} from "@/app/services/comment.service";

interface IProps {

}

const CommentsPage: () => Promise<JSX.Element> = async () => {
    const {data} = await commentService.getAllComments();
    return (
        <div>
            <Comments comments={data}/>
        </div>
    );
};

export default CommentsPage ;