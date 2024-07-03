import {axiosInstance} from "./axios.service";
import {IPost} from "../interfaces";
import {IRes} from "@/app/types";
import {urls} from "@/app/constants";

const postService = {
    getAllPosts: (): IRes<IPost[]> => axiosInstance.get(urls.posts),
    getAllPostsOfUser: (userId:number): IRes<IPost[]> => axiosInstance.get(urls.postsOfUser(userId)),
}


export {postService}