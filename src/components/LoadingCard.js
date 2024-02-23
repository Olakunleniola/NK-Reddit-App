import React from "react";
import { UpvoteActive, DownvoteActive,} from "./SvgIcons";
// Card Animation
export function LoadingCard () {
    return (
        <div className="card">
            <div className="vote-container">
                    <button id="up" className="up"><UpvoteActive/></button>
                <p className="upvotes anime anime-time"></p>
                <button id="down" className="down"><DownvoteActive/></button>
            </div>
            <div className="content-card">
                <div className="anime anime-title" aria-roledescription="animation-header"></div>
                <div  className="cont-img anime anime-img"></div>
                <div className="comment-cont">
                    <div className="anime anime-time"></div>
                    <p className="name anime anime-time"></p>
                    <p className="time anime anime-time"></p>
                    <button className="anime anime-time"></button>
                </div>
            </div>
        </div>
    )
}