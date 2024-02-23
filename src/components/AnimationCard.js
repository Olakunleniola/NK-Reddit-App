import React from "react"; 

export default function AnimationCard() {
    return (
        <div className="card">
            <div className="upvote-cont">
                    <button id="up" className="up material-symbols-outlined">thumb_up</button>
                <p className="upvotes anime anime-time"></p>
                <button id="down" className="down material-symbols-outlined">thumb_down</button>
            </div>
            <div className="content-card">
                <h1 className="anime anime-h1"></h1>
                <div  className="cont-img anime anime-img"></div>
                <div className="comment-cont">
                    <div className="anime anime-time"></div>
                    <p className="name anime anime-time"></p>
                    <p className="time anime anime-time"></p>
                    <button className="material-symbols-outlined anime anime-time"></button>
                </div>
                <div className="comment-div">
                    <div className="com-cont">
                        <div className="com-info">
                            <div className="anime anime-time"></div>
                            <p className="name anime anime-time"></p>
                            <p className="time anime anime-time"></p>
                        </div>
                        <p className="comment anime anime-com"></p>
                        <p className="comment anime anime-com"></p>
                        <p className="comment anime anime-com"></p>
                        <p className="comment anime anime-com"></p>
                    </div>
                </div>
            </div>
        </div>   
    )
} 

