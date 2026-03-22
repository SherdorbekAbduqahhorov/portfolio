"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation"

import { GoFileDirectoryFill } from "react-icons/go";
import { FaBookReader } from "react-icons/fa";
import { GiSkills, GiSharpCrown } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";

function Crutpage() {
  const pathname = usePathname()

  const isActive = (path) => pathname === path

  return (
    <div className='divcrutpage fixed'>
      
      <div className='divcrutpage2 border-b-[1px] border-white'>
        <h1><GiSharpCrown className='w-[30px] h-[30px]' /> Portifolio</h1>
        <p>Admin Panel</p>
      </div>

      <div className='divcrutpage3'>
        <div className='links3'>

          <Link 
            className={`link1 ${isActive('/auth/crut/skills') ? 'active' : ''}`} 
            href={'/auth/crut/skills'}
          >
            <GiSkills /> Skills
          </Link>

          <Link 
            className={`link1 ${isActive('/auth/crut/expariance') ? 'active' : ''}`} 
            href={'/auth/crut/expariance'}
          >
            <FaBookReader /> Experiences
          </Link>

          <Link 
            className={`link1 ${isActive('/auth/crut/projacts') ? 'active' : ''}`} 
            href={'/auth/crut/projacts'}
          >
            <GoFileDirectoryFill /> Projects
          </Link>

        </div>

        <div className='divlogout'>
          <Link className='lunkch' href={"/auth/login"}>
            <CiLogout /> <p>Logout</p>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Crutpage