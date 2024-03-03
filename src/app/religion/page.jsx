"use client"
import Image from 'next/image'
import style from "../style.module.css"
import Link from 'next/link'
import { faith } from '../components/BlogFile'
import { useState } from 'react'


export default function page() {
  const [ search, setSearch] = useState('')
  const fates = faith.filter(fate => fate.title.toLowerCase().includes(search.toLowerCase()))
  function abi(e){
    setSearch(e.target.value)
  }

  const relly = fates.length > 0 ? fates.map(fate => (
    <article key={fate.id} className='grid text-center justify-center m-auto'>
      <Link href={`/religions/${fate.title.split(' ').join('')}`}>
      <Image src={fate.image} alt='faith' width={300} height={300} className={style.entertainment}/>
      <h2 className='font-bold text-xs'>{fate.title}</h2>
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
      {relly}
    </div>
    </>
  )
}
