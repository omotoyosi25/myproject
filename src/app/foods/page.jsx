"use client"
import { useState } from "react"
import Image from 'next/image'
import style from "../style.module.css"
import Link from 'next/link'
import { food } from "../components/BlogFile"


export default function Foods() {
const [search, setsearch] = useState('')

const filtered =  food.filter(sushi => sushi.food_title.toLowerCase().includes(search.toLowerCase()))
function abi(e){
  setsearch(e.target.value)
}
const foodArticles =filtered.length > 0 ? filtered.map(sushi => (
  <article key={sushi.id} className='text-center grid justify-center items-center'>
   <Link href={`/food/${sushi.food_title.split(' ').join('')}`}>
    <Image src={sushi.image} alt='sushi' className={style.pizza} height={300} width={300}/>
    <span className='text-center mb-8 mt-2 font-bold text-xs'>
      {sushi.food_title}
    </span>
    </Link>
  </article>
))
:
  <h2 className="flex items-center justify-center text-2xl text-red-700">No Results Found!</h2>

return (
  <>
  <div className='flex items-center justify-center my-5'>
    <input type="text" name="" id="" placeholder='search for food'
    className='w-[40%] outline-none  py-2 border-b-2 border-solid border-b-black'
    value={search} 
    onChange={abi}/>
    </div>

    <main className='grid grid-cols-3 mt-5 items-center m-auto w-4/5'>
      {foodArticles}
    </main>
    </>
  )
}
