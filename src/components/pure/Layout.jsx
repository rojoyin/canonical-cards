import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../../services/PostService";
import {PostCard} from "./PostCard";
const Layout = () => {
    const [posts, setPosts] = useState([]);

    useEffect( ()=> {
        async function getPosts() {
            try {
                const { data } = await getAllPosts();
                setPosts(data);
            } catch (error) {
                console.error(error);
            }
        }
        getPosts();

    }, [])



    return (
        <div className={"row u-equal-height u-clearfix"}>
            {posts.map((post) => <PostCard key={post.id} post={post}/>)}
        </div>
    );
}

export default Layout;