import React from 'react'
import avtarImg from '../../assets/avtar.png'
import TextChange from '../../TextChange'

const Home = () => {
  return (
    <div  className='text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tigther'>
          <TextChange/></h1>
        <p className='text-sm md:text-2xl tracking-tight mt-3 mb-5'>I’m a passionate Front-End Developer specializing in building responsive, interactive, and user-friendly web interfaces. With expertise in modern frameworks like React and a strong foundation in HTML, CSS, and JavaScript, I love turning creative ideas into functional web experiences.</p>
        <a href='#Contact' className="mt-5 md:md-10 text-white py-02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </a>
      </div>
      <div><img className='' src= {avtarImg} alt=""/></div>
    </div>
  )
}

export default Home
