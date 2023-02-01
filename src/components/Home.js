import React from 'react'
import './Home.css'
import { MdFileDownload } from "react-icons/md";
import profile from '../assets/Profile.jpeg'


const Home = () => {
    const mystylebtn={width:'55%' , paddingLeft:'10%'}
    return (
        <div className='homepage' id="home">
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <div className="drawbox">
                         <h1>👋 Hey, </h1>
                             
                    </div>
                   <h1> I'am Vaibhav Sutar</h1>
                    <p>MERN Developer</p>
                    <div className='input-container'>
                        <h4>Exploring the Full Stack Developement with React, Redux, NodeJS, MongoDB, ExpressJS. </h4>
                    </div>
                    

                    <a href={require("../assets/Vaibhav_Sutar.pdf")} download="Vaibhav Sutar Resume"><button style={mystylebtn} className='btn' > Resume <div className="iconDown"> <MdFileDownload/></div></button></a>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={profile} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
