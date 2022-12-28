import axios from 'axios';

export default axios.create(
    {
        baseURL: "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json",
        responseType: 'json',
        auth: false,
        method: "GET",
        timeout: 6000,
    }
)