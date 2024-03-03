"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import style from '../style.module.css'
import Link from 'next/link'
import { govern } from '../components/BlogFile'

export default function page() {
  const  [search, searchItem] = useState('')
  const politic = govern.filter(govt => govt.title.toLowerCase().includes(search.toLowerCase()))
  function abi(love){
    searchItem(love.target.value)
  }

const political = politic.length > 0 ? politic.map(govt => (
  <article key={govt.id} className='grid justify-center items-center'>
    <Link href={`/politic/${govt.title.split(' ').join('')}`}>
    <Image src={govt.image} alt='govt' width={300} height={300} className={style.politics}/>
    <h2 className='font-bold text-xs'>{govt.title}</h2>
    </Link>
  </article>
))

:

<h2 className="flex items-center justify-center text-2xl text-red-700">No Results Found!</h2>

  return (
    <>
      <div className='flex items-center justify-center my-5'>
        <input type="text" name="" id="" placeholder='Search......'
        className='w-[40%] outline-none  py-2 border-b-2 border-solid border-b-black'
        value={search} 
        onChange={abi}/>
      </div>
      <div className='grid grid-cols-3 m-auto w-4/5'>{political}</div>
    </>
  )
}
