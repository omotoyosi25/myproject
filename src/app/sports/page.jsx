"use client"
import Image from 'next/image'
import Link from 'next/link'
import style from '../style.module.css'
import { ball } from '../components/BlogFile'
import { useState } from 'react'

export default function Page() {
  const [ search, setSearch] = useState('')
  const bell = ball.filter (spot => spot.title.toLowerCase().includes(search.toLowerCase()))
  function abi(e){
    setSearch(e.target.value)
  }

const baller = bell.length > 0 ? bell.map(spot => (
  <article key={spot.id} className='grid justify-center items-center'>
    <Link href={`/sport/${spot.title.split(' ').join('')}`}>
    <Image src={spot.image} alt='spot' width={300} height={300} className={style.politics}/>
    <h2 className='font-bold text-sm text-center'>{spot.title}</h2>
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
      <div className='grid grid-cols-3 m-auto w-4/5'>
      {baller}
      </div>
    </>
  )
}
