"use client"
import Image from "next/image"
import style from "../style.module.css"
import Link from "next/link"
import { code } from "../components/BlogFile"
import { useState } from "react"


export default function Page() {
const  [searchCode, setSearchCode]= useState('')
const coders = code.filter(html => html.title.toLowerCase().includes(searchCode.toLowerCase()))
function abi(e){
  setSearchCode(e.target.value)
}

const codes = coders.length > 0 ? coders.map(html => (
  <article key={html.id} className="grid text-center justify-center">
    <Link href={`/htmlslug/${html.title.split(' ').join('')}`} >
    <Image src={html.image} alt="html" width={300} height={300} className={style.entertainment}/>
    <h2 className="font-bold text-xs ">{html.title}</h2>
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
    value={searchCode} 
    onChange={abi}/>
    </div>
     <div className="grid grid-cols-3 m-auto w-4/5">{codes}</div>
     </>
   )
 }
 