import React from 'react'
import "../styles/Skills.css"
import ReactJs from '../assets/skills/React.png'
import Html from '../assets/skills/Html.png'
import Css from '../assets/skills/Css.png'
import Js from '../assets/skills/Js.png'
import Java from '../assets/skills/Java.png'
import spbt from '../assets/skills/spbt.png'
import Cs from '../assets/skills/Cs.png'
import asp from '../assets/skills/asp.png'
import C from '../assets/skills/C.png'
import Cp from '../assets/skills/Cp.png'
import Py from '../assets/skills/py.png'
import Sql from '../assets/skills/Sql.png'
import Mysql from '../assets/skills/Mysql.png'
import Mssql from '../assets/skills/Mssql.png'
import Bstrap from '../assets/skills/Bstrap.png'
import mui from '../assets/skills/mui.png'

const Skills = () => {
  return (
    <div className='skills'>
      <h1>My Skills</h1>

      <div className='frontend'>
        <h3>Front-End</h3>
        <div className='images'>
          <img src={ReactJs} />
          <h5>ReactJS</h5>
          <img src={Html} />
          <h5>HTML</h5>
          <img src={Css} />
          <h5>CSS</h5>
          <img src={Bstrap} />
          <h5>BootStrap</h5>
          <img src={mui} />
          <h5>Material UI</h5>
        </div>
      </div>

      <div className='backend'>
        <h3>Back-End</h3>
        <div className='images'>
          <img src={spbt} />
          <h5>Spring Boot</h5>
          <img src={asp} />
          <h5>ASP .NET MVC</h5>
          <img src={Mysql} />
          <h5>MySQL</h5>
          <img src={Mssql} />
          <h5>MSSQL</h5>
        </div>
      </div>

      <div className='languages'>
        <h3>Languages</h3>
        <div className='images'>
          <img src={Java} />
          <h5>Java</h5>
          <img src={Cs} />
          <h5>C#</h5>
          <img src={C} />
          <h5>C</h5>
          <img src={Cp} />
          <h5>C++</h5>
          <img src={Py} />
          <h5>Python</h5>
          <img src={Js} />
          <h5>JavaScript</h5>
          <img src={Sql} />
          <h5>SQL</h5>
        </div>
      </div>
    </div>
  )
}

export default Skills