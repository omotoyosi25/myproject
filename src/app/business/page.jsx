"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import style from "../style.module.css"
import Link from 'next/link'
import { contents } from '../components/BlogFile'

export default function Page() {
  const [search, setSearch] = useState('')
  const goods = contents.filter(busi => busi.title.toLowerCase().includes(search.toLowerCase()))
  function abi(ei){
    setSearch(ei.target.value)
  }
  
  const content = goods.length > 0 ? goods.map(busi =>(
    <article key={busi.id} className='text-center grid justify-center items-center'>
        <Link href={`/bus/${busi.subtitle.split(' ').join('')}`}>
        <Image src={busi.images} alt='image' width={300} height={300} className={style.business}/>
        <h2 className='text-xs font-bold'>
            {busi.subtitle}
        </h2>
        </Link>
    </article>
  ))

:
<h2 className='flex justify-center items-center text-center m-auto text-2xl text-red-800'>No Search Results Found!!!</h2>


  return (
    <>
     <div className="flex items-center justify-center my-5 border-t-black">
        <input type="text" placeholder="Type your search here......" onChange={abi} value={search} className='w-[40%] outline-none  py-2 border-b-2 border-solid border-b-black'/>
      </div>
      <main className='grid grid-cols-3 mt-5 items-center m-auto w-4/5'>
        {content}
      </main>
    </>
  )
}
