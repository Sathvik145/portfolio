import React from 'react'
import MyImage from '../assets/myImage1.jpg'
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="Home" className='h-screen w-full text-white bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-5xl px-5 font-bold text-white'>I'm a Full Stack  Developer</h2>
            <p className='text-gray-500 py-4 px-5 max-w-md'>
            Enthusiastic Full Stack Web Developer with good knowledge in Data Structures and Algorithms. Strong problem-solving skills, dedication to learning and timely delivery. 
            </p>
            <div className='px-5'>
                <Link to='Projects' smooth duration={500} className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer on hover:scale-95'> Projects </Link>
            </div>
        </div>

        <div>
            <img src={MyImage} alt="my Profile" className='rounded-2xl mx-auto w-2/3 md:w-5/6'/>
        </div>
      </div>
    </div>
  )
}

export default Home
