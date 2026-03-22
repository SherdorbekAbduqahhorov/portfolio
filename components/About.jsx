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
              <h2>Creating Modern and Meaningful Web Experiences</h2>
              <p>I’m a Front-End Developer passionate about building modern, responsive, and user-friendly web apps. My journey began with design and grew into curiosity about how websites work.</p>
<p>I enjoy turning ideas into interactive experiences using creativity and modern web technologies to create clean, efficient, and engaging interfaces.</p>
<p>When not coding, I focus on learning new tech, improving projects, and building faster, user-friendly websites. I value continuous learning and writing maintainable code.</p>
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