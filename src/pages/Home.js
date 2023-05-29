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
          <h1>Skills</h1>
          <ol className='list'>
            <li className='item'>
              <h2>Front-End</h2>
              <span>
                React Js, HTML, CSS,
                BootStrap, MaterialUI
              </span>
            </li>
            <li className='item'>
              <h2>Back-End</h2>
              <span>
                Java Spring Boot, ASP.NET MVC, MySQL, MSSQL
              </span>
            </li>
            <li className='item'>
              <h2>Languages</h2>
              <span>Java, JavaScript, C#, Python, C, C++, SQL</span>
            </li>
          </ol>
        </div>
    </div>
  )
}

export default Home