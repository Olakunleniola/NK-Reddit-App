import React  from "react";
import { useSelector } from "react-redux";
import {getAllComments, commentLoading} from "./commentsSlice"; 
import {LoadingComment} from '../../components/LoadingComment';
import ReactMarkdown from 'react-markdown';

export function Comments ({id}) {
    const comments = useSelector((state) => getAllComments(state, id));
    const isLoading = useSelector(commentLoading);
    // if comments is loading show comment animation
    if(isLoading) {
        return <LoadingComment />;
    }
    // else return the comments
     return ( comments &&
        comments.map((comment, idx) => 
            
            <div className="com-cont" key={idx}>
                <div className="com-info">
                    <img src="" alt={comment.author} className="author-img" />
                    <p className="name">{comment.author}</p>
                    <p className="time">{comment.time}</p>
                </div>
                <div className="comment">
                    <ReactMarkdown>
                        {comment.title}
                    </ReactMarkdown>
                </div>
            </div>
        )
    )
}