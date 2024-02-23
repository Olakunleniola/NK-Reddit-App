import React, { useState } from "react";
import { Post } from "../../components/Post";
import { useNavigate } from "react-router";

export default function Posts ({posts, showComments, show}) {
    const [upvote, setUpvote] = useState(false);
    const [downvote, setDownvote] = useState(false);
    const navigate = useNavigate();

    const handleUpvote = () => {
         if(upvote) {setUpvote(false)}
         else if(downvote){setUpvote(true);setDownvote(false)}
         else {setUpvote(true)}    
    }
    
    const handleDownvote = () => {
         if(downvote) {setDownvote(false);}
         else if(upvote){setUpvote(false);setDownvote(true)}
         else {setDownvote(true)}    
    }

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
                upvote={upvote}
                downvote={downvote}
                showComments={showComments}
                handleDownvote={handleDownvote}
                handleUpvote={handleUpvote}
                handleClick={handleClick}
                show={show}
            />
        )                 
    )
}