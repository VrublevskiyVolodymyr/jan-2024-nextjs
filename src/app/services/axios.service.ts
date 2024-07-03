import axios from "axios";
import {baseURL} from "@/app/constants/urls";

const axiosInstance = axios.create({
    baseURL
});

export { axiosInstance };