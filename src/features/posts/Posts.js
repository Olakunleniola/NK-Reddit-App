import React from "react";
import { Post } from "../../components/Post";
import { useNavigate } from "react-router";

export default function Posts ({posts, showComments, show}) {
    const navigate = useNavigate();
    const handleClick = (id) => {
        // Assuming you have access to a Router context here, you can use Navigate to navigate to a specific route
        navigate(`/${id}`)
        window.scrollTo(0, 0)
    }

    return ( 
        posts.map((post, idx) => 
            <Post 
                key={idx}
                post={post} 
                showComments={showComments}
                handleClick={handleClick}
                show={show}
            />
        )                 
    )
}