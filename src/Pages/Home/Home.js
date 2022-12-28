import React from 'react';
import Leftbar from '../../Component/Leftsidecontainer/Leftbar';
import MainPost from '../../Component/MainPostContainer/MainPost';
import Navbar from '../../Component/Navber/Navber';
import Rightbar from '../../Component/RightsideContainer/Rightbar';
import './home.css'

const Home = () => {
    return (
        <div className='home'>
            <Navbar></Navbar>
            <div className='ComponentContainer'>
             <Leftbar></Leftbar>
             <MainPost></MainPost>
             <Rightbar></Rightbar>
            </div>
        </div>
    );
};

export default Home;
