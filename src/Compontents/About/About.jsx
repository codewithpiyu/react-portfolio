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
                            <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio fuga maiores, ea quo repellendus suscipit doloribus ut voluptate pariatur, iste ipsam culpa nesciunt deserunt sequi laboriosam commodi nobis! Dicta, enim!</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size = {30} className= "mt-1"/>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend developer</h1>
                            <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio fuga maiores, ea quo repellendus suscipit doloribus ut voluptate pariatur, iste ipsam culpa nesciunt deserunt sequi laboriosam commodi nobis! Dicta, enim!</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size = {30} className= "mt-1"/>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>DataBase developer</h1>
                            <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio fuga maiores, ea quo repellendus suscipit doloribus ut voluptate pariatur, iste ipsam culpa nesciunt deserunt sequi laboriosam commodi nobis! Dicta, enim! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus accusantium eaque magni perferendis, voluptate numquam fugiat magnam id dolores, similique sint? Quibusdam hic pariatur dolore omnis dolor iusto amet quos?</p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default About
