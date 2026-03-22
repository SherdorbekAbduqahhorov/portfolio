import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from './auth/crut/projacts/page'
import ProjectsComponent from '../components/ProjectsComponent'
import SkillsComponent from '../components/SkillsComponent'
import ContactComponent from '../components/ContactComponent'

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <About/>
      <ProjectsComponent/>
      <SkillsComponent/>
      <ContactComponent/>
    </div>
  )
}