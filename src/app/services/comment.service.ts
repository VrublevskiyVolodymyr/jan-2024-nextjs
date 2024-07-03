import {axiosInstance} from "./axios.service";
import {IComment} from "../interfaces";
import {urls} from "@/app/constants";
import {IRes} from "@/app/types";

const commentService = {
    getAllComments: (): IRes<IComment[]> => axiosInstance.get(urls.comments),
    getAllCommentsOfPost: (postId:number): IRes<IComment[]> => axiosInstance.get(urls.commentsOfPost(postId)),
}


export {commentService}