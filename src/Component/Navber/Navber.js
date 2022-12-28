import React from 'react'
import "./navbar.css";
import searchIcon from "../Images/search.png";
import Notifications from "../Images/bell.png";
import Message from "../Images/message.png";



export default function Navbar() {
  
 
  
 
  return (
    <div className='mainNavbar'>
          <div className='LogoContainer'>
                    <p>Post Shop</p>
          </div>
          <div>
                    <div className='searchInputContainer'>
                              <img src={`${searchIcon}`} className="searchIcon" alt="" />
                              <input type="text" className='searchInput' placeholder='search your all friends and others people' name="" id="" />
                    </div>
          </div>
          <div className='IconsContainer'>
                    <img src={`${Notifications}`} className="Icons" alt="" />
                    <img src={`${Message}`} className="Icons" alt="" />
                   
                    
                    <div style={{marginRight:"30px" , marginLeft:"20px" , cursor:"pointer"}} >
                      <p>Logout</p>
                    </div>
          </div>
    </div>
  )
}