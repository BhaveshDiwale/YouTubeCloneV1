import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import Recommended from './Recommended';

export default function VideoPlay(props) {
    const  location  = useLocation();
    const {from} = location.state[0];
    const {title} = location.state[1];
    const {channel_id} = location.state[2];

    const [channelDetails,setChannelDetails] = useState([]);

    const onPlayerReady = (event) => {
        const player = event.target;
 
          player.playVideo();
      };

      const fetchChannel = async()=>{
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channel_id}&key=AIzaSyBMjsMqZRd5xXEq328uq8x7eLV4TTbJd0Y`,{
          method: 'GET'
        })
        const response= await data.json();
        // console.log(response.items);
        setChannelDetails(response.items);
      }
      
     
    
      const options = {
        height: "500",
        width: "890",
        playerVars: {
          autoplay: 1,
          rel:0,
          modestbranding:1
        },
        
      };

      const handleClick = ()=>{
        console.log(props.state.id);
      }

      useEffect(()=>{
        fetchChannel();
      },[])

  return (
    <>
   
      <Navbar/>
      <div className="container-fluid d-flex " >
        <div className="container" style={{position: 'sticky', bottom:'0px'}}>
      

            <div className="videoplay ms-3 mt-3" onClick={handleClick}>
            <YouTube
                videoId={from}
                opts={options}
                onReady={onPlayerReady}
              
            />
            </div>
            {channelDetails.map((channel)=>(
            <div className="description">
                <h5 className='ms-3 mt-2'>{title}</h5>
                <div className="description-cover d-flex justify-content-between">
                <div className="d-flex">
                  <div className="channel-icon">
                    <img src={channel.snippet.thumbnails.default.url} className='rounded-circle ms-3 mt-1' height={40}/>
                  </div>
                  <div className="channel-name ms-3">
                    <div className='fw-bold' style={{fontSize:'15px'}}>{channel.snippet.title}</div>
                    <div style={{fontSize:'12px',color:'grey', fontWeight:'500'}}>{(channel.statistics.subscriberCount/1000000)>=1?(channel.statistics.subscriberCount/1000000)+'M':(channel.statistics.subscriberCount/1000)+'K'} subscribers</div>
                  </div>
                  <button className="btn btn-light rounded-pill px-3 ms-3 mt-0" style={{fontSize:'14px', fontWeight:500}}>Subscribe</button>
                </div>
                <div className="d-flex">
                    <button className="btn d-flex rounded-pill" style={{backgroundColor: '#444444', alignItems:'center'}}>
                      <span className='material-symbols-outlined' style={{backgroundColor:'transparent', fontSize:'25px', fontWeight:'200'}}>thumb_up</span>
                      <span className='ms-2' style={{backgroundColor:'transparent', fontSize:'14px', fontWeight:'500'}}>{channel.statistics.videoCount}</span>
                      <span className='ms-2' style={{backgroundColor:'transparent', fontWeight:'100'}}>|</span>
                      <span className='material-symbols-outlined ms-3' style={{backgroundColor:'transparent', fontSize:'25px', fontWeight:'200'}}>thumb_down</span>
                    </button>
                    <button className="btn d-flex rounded-pill" style={{backgroundColor: '#444444', alignItems:'center'}}>
                    <span className='material-symbols-outlined me-2' style={{backgroundColor:'transparent', fontSize:'25px', fontWeight:'200'}}>share</span>
                    <span style={{backgroundColor:'transparent', fontSize:'14px', fontWeight:'500'}}>Share</span>
                    </button>
                    <button className="btn d-flex rounded-pill" style={{backgroundColor: '#444444', alignItems:'center'}}>
                    <span className='material-symbols-outlined me-2' style={{backgroundColor:'transparent', fontSize:'25px', fontWeight:'200'}}>download</span>
                    <span style={{backgroundColor:'transparent', fontSize:'14px', fontWeight:'500'}}>Download</span>
                    </button>
                    <span className='rounded-circle material-symbols-outlined ms-1' style={{backgroundColor: '#444444', width:'40px', height:'40px', padding:'8px'}}>more_horiz</span>
                </div>

                </div>

                <div className="intro-matter px-3 py-3 rounded mb-5" style={{backgroundColor:'#303030'}}>
                  <div className="col-7 mb-2" style={{backgroundColor:'#303030', fontSize:'14px', fontWeight:'500'}}>
                  <div className='mb-2' style={{backgroundColor:'#303030'}}>{Math.floor(channel.statistics.viewCount/1000000)} M views</div>
                  {channel.snippet.description}
                  </div>
                </div>
            </div>
            ))}
        </div>
            <Recommended/>
      </div>

    </>
  )
}
