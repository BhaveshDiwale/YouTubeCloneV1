import React from 'react'
import './Sidebar.css'
import ContentHead from './ContentHead'
import Content from './Content'

import SearchList from './SearchList'
export default function Sidebar(props) {
 
  return (
    <>
    <div className="d-flex">
    <div className="col-2 d-flex bg-light main-sidebar ">
        <div className="row1 d-flex">
            <div className="icon"><span className="material-symbols-outlined">home</span></div>
            <div className="item">Home</div>
        </div>
        <div className="row1 d-flex">
            <div className="icon"><span className="material-symbols-outlined">music_note</span></div>
            <div className="item">Shorts</div>
        </div>
        <div className="row1 d-flex row-special">
            <div className="icon"><span className="material-symbols-outlined">subscriptions</span></div>
            <div className="item">Subsciptions</div>
        </div>

        <div className="row1 d-flex">
            <div className="icon"><span className="material-symbols-outlined">video_library</span></div>
            <div className="item">Library</div>
        </div>
        <div className="row1 d-flex">
            <div className="icon"><span className="material-symbols-outlined">history</span></div>
            <div className="item">History</div>
        </div>
        <div className="row1 d-flex">
            <div className="icon"><span className="material-symbols-outlined">smart_display</span></div>
            <div className="item">Your Videos</div>
        </div>
        <div className="row1 d-flex">
            <div className="icon"><span className="material-symbols-outlined">schedule</span></div>
            <div className="item">Watch later</div>
        </div>
        <div className="row1 d-flex">
            <div className="icon"><span className="material-symbols-outlined">thumb_up</span></div>
            <div className="item">Liked videos</div>
        </div>
        <div className="row1 d-flex row-special">
            <div className="icon"><span className="material-symbols-outlined">expand_more</span></div>
            <div className="item">Show More</div>
        </div>
        <div className="row1 d-flex">
            <div className="icon"><span className="material-symbols-outlined">settings</span></div>
            <div className="item">Settings</div>
        </div>
        <div className="row1 d-flex">
            <div className="icon"><span className="material-symbols-outlined">flag</span></div>
            <div className="item">Report history</div>
        </div>
        <div className="row1 d-flex">
            <div className="icon"><span className="material-symbols-outlined">help</span></div>
            <div className="item">Help</div>
        </div>
        <div className="row1 d-flex row-special">
            <div className="icon"><span className="material-symbols-outlined">sms_failed</span></div>
            <div className="item">Send Feedback</div>
        </div>
        <div className="row1 d-flex">
            <div className="icon"><span className="material-symbols-outlined">local_fire_department</span></div>
            <div className="item">Trending</div>
        </div>
        <div className="row1 d-flex">
            <div className="icon"><span className="material-symbols-outlined">local_mall</span></div>
            <div className="item">Shopping</div>
        </div>
        <div className="row1 d-flex row-special">
            <div className="icon"><span className="material-symbols-outlined">trophy</span></div>
            <div className="item">Sports</div>
        </div>
        <div className="row1 d-flex">
            <div className="icon"><span className="material-symbols-outlined">settings</span></div>
            <div className="item">Settings</div>
        </div>
        <div className="row1 d-flex">
            <div className="icon"><span className="material-symbols-outlined">flag</span></div>
            <div className="item">Report history</div>
        </div>
        <div className="row1 d-flex">
            <div className="icon"><span className="material-symbols-outlined">help</span></div>
            <div className="item">Help</div>
        </div>
        <div className="row1 d-flex row-special">
            <div className="icon"><span className="material-symbols-outlined">sms_failed</span></div>
            <div className="item">Send Feedback</div>
        </div>

        <div className="copyright">
            <li className='utility'><a href="/">About</a></li>
            <li className='utility'><a href="/">Press</a></li>
            <li className='utility'><a href="/">Copyright</a></li>
            <li className='utility'><a href="/">Contact Us</a></li>
            <li className='utility'><a href="/">Creators</a></li>
            <li className='utility'><a href="/">Advertise</a></li>
            <li className='utility'><a href="/">Developers</a></li>
        </div>
        
    </div>

    <div className=" d-flex sidebar-2 container-fluid">
        <ContentHead/>
        {props.queryAns===false?<div className="d-grid toRepeat">
        <Content/>
        </div>:
        <SearchList searchedFor={props.searchedFor}/>
        }
        
      
    </div>
    </div>
    </>
  )
}
