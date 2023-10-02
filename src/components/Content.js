import React, { useEffect, useState,} from 'react'
import './Content.css'
import { Link } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
export default function Content() {
  const [videos,setVideos] = useState([]);

  const fetchVideos = async()=>{
    const data = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyBMjsMqZRd5xXEq328uq8x7eLV4TTbJd0Y',{
      method: 'GET'
    })
    const response = await data.json();
    setVideos(response.items);
    // console.log(response.items)
  }

  useEffect(()=>{
    fetchVideos();
  },[])

  return (
  <>
    <div className="container-fluid d-grid " id='grid-card-container'>
    {/* <InfiniteScroll
          dataLength={50}
          next={fetchVideos}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        > */}
      {videos.map((video)=>(
        <>
        <Link to='/watch' state={ [{'from': video.id} ,{'title':video.snippet.title},{'channel_id': video.snippet.channelId} ] } style={{textDecoration:'none'}}>

          <div className="cards mb-4" >
            <div className="card-head">
              <img src={video.snippet.thumbnails.medium.url} id={video.id} alt="img" width={380}/>
            </div>

            <div className="card-body mt-2" style={{width:'350px'}}>
              <div className="d-flex">

                <img src={video.snippet.thumbnails.default.url} alt="img" className='rounded-circle me-2 mt-1' width={40} height={40}/>
               
                <div className="d-flex flex-column">
                  <h6 className='mb-0'>{video.snippet.title}</h6>
                  <p className="channelName text-secondary mb-0">{video.snippet.channelTitle}</p>
                  <p className='channelStatistics text-secondary mb-0'>{Math.floor(video.statistics.viewCount/1000)}K views .{video.snippet.publishedAt}</p>
                </div>
              </div>
            </div>

          </div>
    </Link>

        </>
      ))}
      {/* </InfiniteScroll> */}
    </div>

  </>
  )
}