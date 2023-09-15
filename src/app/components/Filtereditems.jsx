import Link from 'next/link'
import React from 'react'

export default function Filtereditems() {
  return (
    <nav className=''>
        <ul className='flex gap-2 '>
            <Link href='/entertainment'>
            <li className='bg-gray-300 text-black mt-4 px-4 w-[130px] hover:border-1 border-black ml-5 text-center rounded-full shadow-x1'>entertainment</li>
            </Link>
            <Link href='/html'>
            <li className='bg-gray-300 text-black mt-4 px-4 rounded-full w-[80px] text-center shadow-x1'>html</li>
            </Link>
            <Link href='/religion'>
            <li className='bg-gray-300 text-black mt-4 px-4 rounded-full w-[80px] text-center shadow-x1'>religion</li>
            </Link>
            <Link href='/business'>
            <li className='bg-gray-300 text-black mt-4 px-4 rounded-full w-[90px] text-center shadow-x1'>business</li>
            </Link>
            <Link href='/politics'>
            <li className='bg-gray-300 text-black mt-4 px-4 rounded-full w-[80px] text-center shadow-x1'>politics</li>
            </Link>
            <Link href='/food'>
            <li className='bg-gray-300 text-black mt-4 px-4 rounded-full w-[60px] text-center shadow-x1'>food</li>
            </Link>
            <Link href='/sports'>
            <li className='bg-gray-300 text-black mt-4 px-4 rounded-full w-[80px] text-center shadow-x1'>sports</li>
            </Link>
            <Link href='/javaScript'>
            <li className='bg-gray-300 text-black mt-4 px-4 rounded-full w-[100px] text-center shadow-x1'>javaScript</li>
            </Link>
            <Link href='/fashion'>
            <li className='bg-gray-300 text-black mt-4 px-4 rounded-full w-[80px] text-center shadow-x1'>fashion</li>
            </Link>
        </ul>
    </nav>
  )
}
