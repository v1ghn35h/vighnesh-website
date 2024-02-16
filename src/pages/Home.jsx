import React from 'react'
import AboutMe from '../components/AboutMe'
import Intro from '../components/Intro'
import Projects from '../components/Projects'


const Home = () => {
  return (
    <>
      <Intro />

      <div className='mt-5'>
        <AboutMe />
      </div>

      <div className='mt-5 pt-5'>
        <Projects />
      </div>
      
    </>
  )
}

export default Home