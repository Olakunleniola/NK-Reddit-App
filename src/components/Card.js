// import React from "react";
import { useRef, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import {RedditVideoPlayer} from './VideoPlayer';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getDark } from "../features/posts/postSlice";
import { CommentIcon } from "./SvgIcons";

export function Card({post, showComments, show, handleClick}) {

    const textContainerRef = useRef(null);
    const postTextRef = useRef(null);
    const readMoreBtnRef = useRef(null);
    const buttonRef = useRef(null)
    const dark = useSelector(getDark)

    // Add read more to overflowing content
    useEffect(() => {
        const checkOverflow = () => {
            if (postTextRef.current && textContainerRef.current && readMoreBtnRef.current) {
                if (postTextRef.current.scrollHeight > textContainerRef.current.clientHeight) {
                    readMoreBtnRef.current.style.display = 'block';
                } else {
                    readMoreBtnRef.current.style.display = 'none';
                }
            }
        };

        checkOverflow(); // Check overflow on mount

        // Recheck overflow when the window is resized
        const handleResize = () => {
            checkOverflow();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>  
            <h1 className={`content-header ${dark && "mode-dark"}`} onClick={() => { if(show === false){handleClick(post.id)} }}>{post.title}</h1>
            <div className="media-container">
                { post.image === 'image' &&
                    <div className="img-container">
                        <img src={post.url} alt={post.url} className="img" />
                    </div>
                }
                { (post.image === 'hosted:video' ||  post.image === 'rich:video') && 
                    <div className="video-container">
                        <RedditVideoPlayer raw_video={post.video_url} />
                    </div>
                }
            </div>
            <div className="text-container"  ref={textContainerRef}>
                <div className={!show?"post-text":""} ref={postTextRef}>
                    <ReactMarkdown>
                        {post.self_text}
                    </ReactMarkdown>
                </div>
                <Link className="read-more" to={`/${post.id}`} ref={readMoreBtnRef}>....Read More</Link>
            </div>
            <div className="comment-cont">
                <img className="author-img" src="" alt={post.author}/>
                <p className="name">{post.author}</p>
                <p className="time">{post.time}</p>
                <div className="but-div">
                    <button 
                    className={`comment-but ${dark && "mode-dark"}`}  
                    ref={buttonRef}
                    onClick={() => {post.num_comments >= 1 &&
                        showComments(buttonRef,post.id, post.permalink)
                        }}
                    ><CommentIcon/>
                    </button>
                    <span className="comment-size"> {post.num_comments}</span>
                </div>
            </div>
        </>
    )
}

