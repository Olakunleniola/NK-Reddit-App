import React from "react";

export function Subreddit ({subreddits, handleClick}) {

    const alt_img = 'https://cdn-icons-png.flaticon.com/512/1241/1241005.png';

    return (
        <>
            <ul className="subreddit-list">
            { subreddits && 
                subreddits.map(subreddit =>{
                        return (
                            <li 
                            className='but-card'  
                            key={subreddit.id}  
                            id={subreddit.name === 'pics'? 'active': ''}
                            onClick={({target}) => handleClick(target,subreddit.url)}>
                                <button className="subreddit">
                                    <img src={subreddit.img || alt_img} className="sub-img" alt={subreddit.name} />
                                    {subreddit.name}
                                </button>
                            </li>
                        )
                    } 
                )
            }
            </ul>
        </>
    )
}