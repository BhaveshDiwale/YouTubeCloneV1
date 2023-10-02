import React, { useState,useRef} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  const ref = useRef(null);
  const [query,setQuery] = useState('');

  const handleChange = (e)=>{
    setQuery(e.target.value);
  }

  const handleSearch=(e)=>{
    if(e.key==='Enter' || e.target.id==='mic')
    props.queryQues(true,query)
  
  }
  const handleCancel=()=>{props.queryQues(false,query);ref.current.value='';}
  return (
    <>
  
    <div className="container-fluid navbar">

      <div className="left-nav d-flex" >
      <span className="material-symbols-outlined ham">menu</span>
      <Link to='/' style={{textDecoration:'none', color:'white'}}>
      <div className="logo-wrap">
      <img src="./ytclone.png" className='ytlogo' alt="none" width={35}/>
      <h2 id='logo-heading'>YouTube</h2>
      </div>
      </Link>

      </div>

      <div className="center-nav">
        <input type="text" placeholder='Search' ref={ref} className='search-bar me-2' onChange={handleChange} onKeyDown={handleSearch}/>
        <span className="material-symbols-outlined mics" id='cancel' style={{cursor:'pointer'}} onClick={handleCancel}>cancel</span>

        <span className="material-symbols-outlined mics" id='mic' style={{cursor:'pointer'}} onClick={handleSearch}>search</span>
      </div> 

      <div className="right-nav d-flex">

       {/* {(props.isLoggedin===true)? <div className="loggedin"> */}
      <span className="material-symbols-outlined" id='video'>video_call</span>
      <span className="material-symbols-outlined" id='bell'>notifications</span>
      <sup><span class="badge badge-light bg-danger">4</span></sup>
      <span className="material-symbols-outlined" id='man'>person</span>
      </div>
       {/* <div className="notloggedin">
       <span className="material-symbols-outlined" id='more'>more_vert</span>
      <div className="signIn d-flex">  
      <span className="material-symbols-outlined" id='man1'>person</span>
      <h6>Sign In</h6>
      </div> 
      </div>  */}

      </div>
    {/* </div> */}
    </>
  )
}
