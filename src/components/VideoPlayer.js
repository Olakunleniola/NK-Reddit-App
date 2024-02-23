import React from 'react';
import ReactPlayer from 'react-player';

export function RedditVideoPlayer({raw_video}) {
  let videoUrl = ''
  if(raw_video.reddit_video){
      const {reddit_video} = raw_video
      videoUrl = reddit_video.dash_url || raw_video.hls_url || raw_video.fallback_url;
  }
    
  else if(raw_video.oembed) {
    const match = /src=["'](.*?)["']/i.exec(raw_video.oembed.html);
    if (match) {
      videoUrl = (match[1]);
    }
  }
  
  return (
    <div className='media'>
      {videoUrl && <ReactPlayer url={videoUrl} controls />}
    </div>
  )
 
}
