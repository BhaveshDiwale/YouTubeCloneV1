import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function SearchList(props) {
    const [videosSearched,setVideosSearched] = useState([]);

    const searchedVideo = async()=>{
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${props.searchedFor}-channels&key=AIzaSyBMjsMqZRd5xXEq328uq8x7eLV4TTbJd0Y`,{
            method: 'GET'
        })
        const response = await data.json();
        console.log(response.items);
        setVideosSearched(response.items);
    }

    useEffect(()=>{
        searchedVideo();
    },[])
  return (
    <div>
        <div className="container-fluid">
    
         {videosSearched.map((video)=>(
            <Link to='/watch' state={ [{'from': video.id.videoId} ,{'title':video.snippet.title},{'channel_id': video.snippet.channelId} ] } style={{textDecoration:'none'}}>
            <div className="container-fluid d-flex my-5">
                <div className="image me-3">
                    <img src={video.snippet.thumbnails.medium.url} width={400} className='my-0 py-0' style={{borderRadius:'10px'}} alt="" />
                </div>
                <div className="content">
                    <div className="title fs-5 mb-3">{video.snippet.title}</div>
                    <div className="d-flex">
                        <img src={video.snippet.thumbnails.default.url} className='rounded-circle me-2'  width={30} height={30} alt="" />
                    <div className="channel_name mb-3" style={{fontSize:'14px',fontWeight:'500', color:'grey'}}>{video.snippet.channelTitle}</div>
                    </div>
                    <div className="desc" style={{fontSize:'14px',fontWeight:'500', color:'grey'}}>{video.snippet.description}</div>
                </div>
            </div>
            </Link>
         ))}
        </div>
    </div>
  )
}
