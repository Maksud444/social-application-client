import React from 'react';
import './rightbar.css';
import ads from '../Images/ads1.png';
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';

const Rightbar = () => {
    return (
        <div className='rightbar'>
            <div className='rightcontainer'>
                <div className='adsContainer'>
                    <img src={ads} className="adsimg" alt="" />
                    <div >
                        <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>Mern Stack Course</p>
                        <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy This Course</p>
                    </div>
                </div>
                <div className='adsContainer'>
                    <img src={image1} className="adsimg" alt="" />
                    <div >
                        <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>Mern Stack Course</p>
                        <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy This Course</p>
                    </div>
                </div>
                <div className='adsContainer'>
                    <img src={image2} className="adsimg" alt="" />
                    <div >
                        <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>Mern Stack Course</p>
                        <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy This Course</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Rightbar;