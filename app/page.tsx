import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Projectlar from '../components/Projectlar'
import SkillsPart from '../components/SkillsPart'
import ContactPart from '../components/ContactPart'
export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Projectlar/>
      <SkillsPart/>
      <ContactPart/>
    </div>
  )
}