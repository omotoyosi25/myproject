"use client"
import Image from "next/image"
import style from "../style.module.css"
import Link from "next/link"
import { entertain } from "../components/BlogFile"
import { useState } from "react"


export default function Page() {
const [searching, setsearch] =useState('')
const enterer = entertain.filter(enter => enter.title.toLowerCase().includes(searching.toLowerCase()))
function abi(e){
  setsearch(e.target.value)
}
const entertains = enterer.length > 0 ? enterer.map(enter => (
    <article key={enter.id} className=" text-center grid justify-center">
        <Link href={`/entertaining/${enter.title.split(' ').join('')}`}>
        <Image src={enter.img} alt="ent" width={300} height={300}  className={style.entertainment}/>
        <h2 className="font-bold text-xs mt-3">{enter.title}</h2>
        </Link>
    </article>
))

:

<h2 className="flex items-center justify-center text-2xl text-red-700">No Results Found!</h2>
return (
  <>
  <div>
  <div className='flex items-center justify-center my-5'>
    <input type="text" name="" id="" placeholder='Search......'
    className='w-[40%] outline-none  py-2 border-b-2 border-solid border-b-black'
    value={searching} 
    onChange={abi}/>
    </div>
  </div>
    <div className="grid grid-cols-3 mt-5 items-center m-auto w-4/5">{entertains}</div>
    </>
  )
}
