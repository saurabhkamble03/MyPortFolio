import React from 'react'
import "../styles/Home.css"
import { LinkedIn,GitHub, Mail} from '@material-ui/icons'
import ReactJs from '../assets/skills/React.png'

const Home = () => {
  return (
    <div className='home'>   
        <div className='about'>
          <h2>Hi, My Name Is Saurabh</h2>
          <div className='prompt'>
            <p> A software developer with a passion for learning and creating.</p>
            <a href='https://www.linkedin.com/in/saurabh-kamble-1b2692212' target='_blank'><LinkedIn/></a>
            <a href="https://github.com/saurabhkamble03" target="_blank"><GitHub/></a>
            <a href='mailTo:saurabhkambleml10@gmail.com'><Mail/></a>
          </div>
        </div>
        <div className='skills'>
          <h1>About Me</h1>
          <div className='aboutme'>
            My name is Saurabh Kamble. I have completed B.E. in Computer Engineering from 
            JSPM's Imperial College Of Engineering & Research, Wagholi, Pune. I like 
            developing applications rich in UI/UX. I also have keen interest in Java Spring
            Boot.
 
          </div>
        </div>
    </div>
  )
}

export default Home
