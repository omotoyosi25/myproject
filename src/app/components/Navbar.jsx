import Image from 'next/image'
import React from 'react'
import logo from '../logo/favicon-32x32.png'
// import style from '../style.module.css'

export default function 
() {
  return (
    <nav className='flex md:flex-row flex-col justify-between h-[100px] items-center px-6 fixed right-0 left-0 bg-slate-300'>
        <ul className='flex space-x-2 items-center'>
            <li>
                <Image src={logo} alt='logo' height={40} width={40}/>
            </li>
            <li>Blogging platform</li>
        </ul>
        <ul className='flex space-x-3 items-center capitalize'>
            <li>our story</li>
            <li>membership</li>
            <li>sign in</li>
            <li className='bg-green-800 hover:bg-green-950 rounded-3xl py-3 w-[100px] text-center text-white cursor-pointer'>get started</li>
        </ul>

    </nav>
  )
}
