import {axiosInstance} from "./axios.service";
import {IUser} from "../interfaces";
import {urls} from "@/app/constants";
import {IRes} from "@/app/types";

const userService = {
    getAllUsers: (): IRes<IUser[]> => axiosInstance.get(urls.users),
}


export {userService}