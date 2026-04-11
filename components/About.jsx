import React from 'react'
import { HiOutlineCode } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa6";
import { GoFileDirectoryFill } from "react-icons/go";
function About() {
  return (
    <div className='containernew aboutdiv1'>
      <p id='aboutmi'>ABOUT ME</p>
        <div className='aboutdiv2'>
            <div className='aboutdiv3'>
              <h2>
  Creating Modern and Meaningful Web Experiences | IELTS 
  <span className='span234'>7</span>
</h2>

<p>
  I’m a Front-End Developer with an IELTS score of 7, which has opened doors to global opportunities and strengthened my ability to communicate effectively in international environments.
</p>

<p>
  I specialize in building modern, responsive, and user-friendly web applications. My journey began with a passion for design and evolved into a deep interest in how websites function and deliver real value to users.
</p>

<p>
  I enjoy transforming ideas into interactive digital experiences using modern technologies. My focus is on creating clean, efficient, and visually engaging interfaces that provide a seamless user experience.
</p>

<p>
  Beyond coding, I continuously work on improving my skills, exploring new technologies, and developing high-performance web solutions. I believe in writing maintainable code and growing as a developer in a global tech environment.
</p>
              <div>
                <h3>What Drives Me</h3>
                <div className='divabout5'>
                  <div className='aboutdiv4'>
                    <div><HiOutlineCode className='abouticon'/>Languages</div>
                    <p>HTML,CSS,JS,REACT,NEXT</p>
                  </div>
                  <div className='aboutdiv4'>
                    <div><FaGraduationCap className='abouticon'/>Education</div>
                    <p>Graduated from Najot Ta’lim</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <img className='aboutimg' src="./img/about.png" alt="" />
        </div>

      
    </div>
  )
}

export default About