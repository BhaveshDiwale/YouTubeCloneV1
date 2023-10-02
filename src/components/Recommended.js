import React from 'react'
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Recommended() {
    const [videos,setVideos] = useState([]);

const fetchVideos = async()=>{
  const data = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=10&regionCode=IN&maxResults=50&key=AIzaSyBMjsMqZRd5xXEq328uq8x7eLV4TTbJd0Y',{
    method: 'GET'
  })
  const response = await data.json();
  setVideos(response.items);
  console.log(response.items)
}

useEffect(()=>{
  fetchVideos();
},[])
  return (
    <>
      <div className="container mt-2" style={{height:'115vh', overflow:'scroll'}}>
        {videos.map((video)=>(
        <Link to='/watch' state={ [{'from': video.id} ,{'title':video.snippet.title},{'channel_id': video.snippet.channelId} ] } style={{textDecoration:'none'}} key={video.id}>
        <div className='d-flex col-10 justify-content-around mt-2'>
        <div className='recommend-image'>
            <img src={video.snippet.thumbnails.medium.url} className='me-4' width={180} style={{borderRadius:'10px'}} alt="" />
        </div>
        <div className="content">
            <div className="title fw-bold" style={{fontSize:'14px'}}>{video.snippet.title}</div>
            <div className="creator fw-bold" style={{fontSize:'12px', color:'grey'}}>{video.snippet.channelTitle}</div>
            <div className="statistics" style={{fontSize:'10px', color:'grey', fontWeight:'500'}}>{Math.floor(video.statistics.viewCount/1000000)}M views </div>
        </div>
        </div>
        </Link>
        ))}
        </div>
    </>
  )
}
