import React from 'react'
import video1 from '../../Media/Videos/Ejemplo1.mp4';
import video2 from '../../Media/Videos/Ejemplo2.mp4';
import video3 from '../../Media/Videos/Ejemplo3.mp4';

export const Videos = () => {
const videos = {video1, video2, video3}
    const videosMap = videos.map((video) => { 
 
        return {videoShow === video ? <video id="Video1"width="400" height="300" muted autoPlay loop className={s.video}  src={video}></video> : null} })
    return (
    <div>Videos</div>
  )
}
