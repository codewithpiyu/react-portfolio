import React from 'react'
import aboutImg from '../../assets/aboutimg.png'
import {IoArrowForward} from 'react-icons/io5'

const About = () => {
  return (
    <div id= "About" className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow -xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <img className='' src = {aboutImg} alt="About img"/>
                <ul>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size = {30} className= "mt-1"/>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend developer</h1>
                            <p className='text-sm md:text-md leading-tight'>"I’m a Front-End Developer with a passion for transforming creative ideas into beautiful, functional web applications. My expertise lies in [specific skills/tools], and I’m committed to delivering seamless user experiences."</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size = {30} className= "mt-1"/>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend developer</h1>
                            <p className='text-sm md:text-md leading-tight'>"I’m a Backend Developer with [X years] of experience in building secure, scalable, and efficient server-side applications. I specialize in [technologies] and am passionate about creating systems that support seamless user experiences."</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size = {30} className= "mt-1"/>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Web Designing</h1>
                            <p className='text-sm md:text-md leading-tight'>
                            Web design involves creating the visual layout and aesthetics of a website, focusing on user experience, graphics, and overall look. Front-end development, on the other hand, involves implementing the design into a functional website using coding languages like HTML, CSS, and JavaScript.
                                
                          
                          </p>
                          </span>
                          </div>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default About;
