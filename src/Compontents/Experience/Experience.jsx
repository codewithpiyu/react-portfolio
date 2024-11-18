import { FaCss3,FaHtml5,FaJs,FaReact,  } from 'react-icons/fa'
// import {SiRadixui }  from 'react-icons/si';
// import {FaGoogle } from 'react-icons/fa';
import {SiMongodb} from "react-icons/si";
import { RiNetflixFill } from '@remixicon/react';

const Exprience = () => {
  return (
    <div id="Experience" className='p-10 md:p-24'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
      <div className='flex items-center justify-around '>
        <div className='flex justify-around  flex-wrap md:p-12 py-10 w-1/2'>
        <div className='w-1/2 flex items-center mb-6'>
        <span className= "p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <FaHtml5 color = "#E34F26" size= {50}/>
        </span>
        </div>
        <div className='w-1/2 flex items-center mb-6'>
      <span className= "p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color = "#1572b6" size= {50}/>
        </span></div>
        <div className='w-1/2 flex items-center mb-6'>
        <span className= "p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color = "#61DAFB" size= {50}/>
        </span></div>
        <div className='w-1/2 flex items-center mb-6'>
        <span className= "p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color = "#F7DF1E" size= {50}/>
        </span>
        </div>
        {/* <span className= "p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color = "#F24E1E" size= {50}/>
        </span> */}
        <div className='w-1/2 flex items-center mb-6'>
        <span className= "p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color = "#47A248" size= {50}/>
        </span>
        </div>
        {/* <span className= "p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRadixui  color = "#FF4438" size= {50}/>
        </span> */}
</div>
<div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center w-1/2'>
  {/* <FaGoogle color="#4285F4" size = {50}/> */}
  
  <span className='text-white'>
    <h2 className='leading-tight text-sky-500 dark:text-sky-400  font-semibold text-2xl'>NEXT SOLUTION</h2>
    <ul className='text-sm p-2'>
      <li>Web Developer</li>
      {/* <li>Sinior SDE developer</li> */}
     </ul>
    <p className='text-lg leading-8 font-thin md:p-8 text-center md:text-left space-y-4 '>
    <ul className='list-inside list-disc'>
      <li > As an intern, I worked as a web developer in this company.</li>
      <li>I have been working as a Web Developer for over 1.4 years Coordinating with product design, management and prototype designs.</li>
      <li>During my internship I worked on Exam Panel project.</li>
      <li>Primar yrole to creating and implementing UI designs for modules like, Dashboard, Admin section, Student section, Exam section, Certificate generation Admin section.</li>
        <li>I worked on Student Inquiry, User Profile, Billing Installments Certificate section</li>
        <li>I worked on generate certificate based on student courses.</li>
    <li>Imparting suggestions on design and layout for better advantage of technologies. Debugging code errors and troubleshooting software issues.</li>
    <li>Developing and implementing UI/UX designs for web applications.</li>
    <li>Optimizing CSS, JavaScript and UI code for best performance.</li>
    <li>Designing and documenting significant software modules along with executing, debugging and testing software modules and features.</li>
   </ul>
   
</p>
    
  </span>
</div>
{/* <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
  <RiNetflixFill  color="#E50914" size = {50}/>
  <span className='text-white'>
    <h2 className='leading-tight'> Software Engineer, Netflix </h2>
    <p className='text-sm leading-tight font-thin'>Sept 2023 -present</p>
     <ul className='text-sm p-2'>
      <li>Work as software developer</li>
      <li>Sinior SDE developer</li>
     </ul>
  </span>
</div> */}
{/* <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
  <FaAmazon  color="#FF9900" size = {50}/>
  <span className='text-white'>
    <h2 className='leading-tight'> Software Engineer, Amazon</h2>
    <p className='text-sm leading-tight font-thin'>Sept 2023 -present</p>
     <ul className='text-sm p-2'>
      <li>Work as software developer</li>
      <li>Sinior SDE developer</li>
     </ul>
  </span>
</div> */}
</div>
      </div>
      
  )
}

export default Exprience
