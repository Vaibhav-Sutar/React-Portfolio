import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import './Footer.css'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='bottom'>
                    <h2>Follow Me</h2>
                                           

                </div>
            <div className='container'>
                
        
              
                <div className='col'>
                        <a href='/'><FaFacebook className='icon'/> Facebook</a>
                </div>
                <div className='col'>
                <a href='/'><FaTwitter className='icon'/> Twitter</a>

                </div>
                <div className='col'>
                <a href='/'><FaLinkedin className='icon'/> LinkedIn</a>

                </div>
                <div className='col'>
                <a href='/'><FaGithub className='icon'/> Github</a>      

                </div>
            </div>
            
        </div>
    )
}

export default Footer
