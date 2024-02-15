import React from 'react'
import projectImage from "../assets/projectImage.png";
import powerbiproject from "../assets/power_bi.jpg"
import netflix_clone from "../assets/netfli_clone.png"

const Projects = () => {

    const Projects = [
        {
            id: 1,
            image: projectImage,
            title: 'Portfolio',
            projectdescription: "• Built an impressive portfolio using React.js and Tailwind. Created a visually appealing and interactive website to highlight my projects, skills. Included a functionality where user can get in touch with me and check out my projects. Demonstrated proficiency in front-end development and attention to detail in design.",
            link:"https://github.com/Sathvik145/my_portfolio",
        },
        {
          id: 2,
          image: powerbiproject,
          title: 'PIZZA SALES REPORT',
          projectdescription: "• Designed a power BI dashboard to understanding goods Pizza sales trend.The final dashboard was effective at displaying the sales trends of an Organization, allowing users to take effective decisions",
          link:"https://github.com/Sathvik145/PIZZA_SALES_REPORT",
      },
      
        {
          id: 3,
          image: netflix_clone,
          title: 'Netflix Clone',
          projectdescription: "• Netflix clone developed using the MERN stack (MongoDB, Express.js, React, Node.js). It includes features suchas user authentication, a main page showcasing available content,search by genre,API integration from TMDB API",
          link:"https://github.com/Sathvik145/Netflix_CLONE",
      }
    ]
  return (
    <div name="Projects" className='bg-gradient-to-b from-black to-gray-800 w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Projects</p>
            <p className='py-5'></p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-1 gap-8 text-center py-8 px-12 sm:px-0'>
            {Projects.map(({id, image, title, projectdescription, link}) => (
                <div key={id} className='flex flex-row bg-gray-800 shadow-md py-2 hover:scale-105 duration-500 rounded-lg'>
                    <img src={image} alt="" className='hidden lg:flex w-1/3'/>
                    <div className='flex flex-col'>
                        <p className='text-3xl font-semibold py-2 mb-2'> {title} </p>
                        <p className=' px-5 py-2 '> {projectdescription} </p>
                        <a href={link} target='_blank' className='py-2 inline hover:underline underline-offset-2'> View Project </a>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  )
}

export default Projects
