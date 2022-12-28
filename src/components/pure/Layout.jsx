import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../../services/PostService";
import {PostCard} from "./PostCard";
const Layout = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        getAllPosts()
            .then(response => {
                if(response.status === 200) {
                    setPosts(response.data);
                }
            })
            .catch()
    }, [])



    return (
        <div className={"row u-equal-height u-clearfix"}>
            {posts.map((post) => <PostCard key={post.id} post={post}/>)}
        </div>
    );
}

export default Layout;