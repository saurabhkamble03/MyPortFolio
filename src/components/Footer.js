import React from 'react'
import { LinkedIn,GitHub, Phone, Mail} from '@material-ui/icons'
import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.linkedin.com/in/saurabh-kamble-1b2692212' target='_blank'><LinkedIn/></a>
            <a href="https://github.com/saurabhkamble03" target="_blank"><GitHub/></a>
            <a href='tel:+91-9112215970'><Phone/></a>
            <a href='mailTo:saurabhkambleml10@gmail.com'><Mail/></a>
        </div>
        <p> &copy; 2023 </p>
    </div>
  )
}

export default Footer