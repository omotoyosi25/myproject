"use client"
import Image from 'next/image'
import style from '../style.module.css'
import Link from 'next/link'
import { fash } from '../components/BlogFile'
import { useState } from 'react'

export default function Page() {
  const [serve, setServe] = useState('')
  const clothing = fash.filter(cloth => cloth.title.toLowerCase().includes(serve.toLowerCase()))
  function abi(e){
    setServe(e.target.value)
  }
const cloth = clothing.length > 0 ? clothing.map(on => (
    <article key={on.id} className='mt-10 grid'>
        <Link href={`/fashing/${on.title.split(' ').join('')}`}>
        <Image src={on.image} alt='fal' width={300} height={300} className={style.politics}/>
        <h2 className=' flex justify-center items-center font-bold text-xs mt-4'>{on.title}</h2>
        </Link>
    </article>
  ))

:

<h2 className='flex justify-center items-center text-center m-auto text-2xl text-red-800'>No Search Results Found!!!</h2>

  return (
    <>
    <div className='flex items-center justify-center my-5'>
    <input type="text" name="" id="" placeholder='Search......'
    className='w-[40%] outline-none  py-2 border-b-2 border-solid border-b-black'
    value={serve} 
    onChange={abi}/>
    </div>
    <div className='grid grid-cols-3 m-auto w-4/5 bg-slate-100'>
        {cloth}
    </div>
    </>
  )
}
