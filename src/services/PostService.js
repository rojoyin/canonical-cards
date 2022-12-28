import APIRequest from "../utils/config/axios.config";


export function getAllPosts() {
    return APIRequest.get("");
}
