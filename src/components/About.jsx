import React from 'react'

const About = () => {
  return (
    <div 
    name="About"
    className='w-full  bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20'>
          Hi there! My name is Nampelli Sathvik. I am a passionate and dedicated software engineer who specializes in web development with a strong commitment to excellence and continuous learning. Currently i am seeking for an opportunity to get associated with a prestigious organization where i can utilize my skills to add value to the organization and improve myself.
        </p>

        <br />

        <p className='text-xl'>
          Besides website designing ,I am also a coding enthusiast. I am familiar with programming languages like primarily JAVA, C++,  and also have good knowledge on data structures and algorithms. In my free time, I enjoy listening songs, playing cricket and watching movies. Thank you for visiting my profile and getting to know me a little better.
        </p>

      </div>
    </div>
  )
}

export default About
