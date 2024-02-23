const url = "https://www.reddit.com";

export  const  getSubReddits = async () =>  {
    const response = await fetch(`${url}/subreddits.json`)
    const data = await response.json()
    const subreddits =  data.data.children.map((subreddit) => {
        return {id:subreddit.data.id ,img: subreddit.data.icon_img, url:subreddit.data.url, name:subreddit.data.display_name }
    });
    return subreddits;
}

export const getSubredditsPost = async (subredditUrl) => {
    const response  = await fetch(`${url}${subredditUrl}new.json`);
    const data = await response.json();
    
    const posts = data.data.children.map(post => {
        return {
            id: post.data.name,
            author: post.data.author,
            title: post.data.title,
            permalink: post.data.permalink.replace(/\/$/, ''),
            video: post.data.is_video,
            video_url: post.data.media,
            image: post.data.post_hint,
            likes: post.data.ups,
            url:post.data.url,
            num_comments: post.data.num_comments,
            self_text: post.data.selftext,
            time: getTime(post.data.created_utc)
        }
    })
    
    return posts;
}

export const getComments = async (permalink) => {
    const response = await fetch(`${url}${permalink}.json`);
    const data = await response.json(); 
    
    const comments = data[1].data.children.map((itm) => {
        return {
            id: itm.data.parent_id,
            author: itm.data.author, 
            title: itm.data.body,
            time: getTime(itm.data.created_utc),
            likes: itm.data.ups,
        }
    })
    return comments;
}



//helper Function 
function getTime(utcTimestamp) {
    // Convert seconds to milliseconds
    const date = new Date(utcTimestamp * 1000);
    const hour = date.getUTCHours();
    const minutes = date.getMinutes()
    return hour > 22 ? 'a day ago' : hour < 1 ? minutes > 1 ? `${minutes} minutes ago`: 'few seconds aga' : `${hour} hour(s) ago` 
} 