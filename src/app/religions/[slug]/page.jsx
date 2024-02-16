import { faith } from '@/app/religion/page'
import Image from 'next/image'
import React from 'react'

export default function page({params}) {
    const reli = faith.find(fate => fate.title.split(' ').join('') == params.slug)
  return (
    <main>
        <div className='font-bold text-center text-2xl'>{reli.title}</div>
        <Image src={reli.image} alt='faith' height={300} width={300} className='m-auto mt-10'/>
        <div className="text-center text-gray-400 text-xl capitalize">{reli.subtitle}</div>
    <div className="text-right mr-64 text-gray-600 font-medium text-[15px] space-x-2">
      <div className="flex items-center w-[60%] m-auto">
      <Image src={reli.author_image} alt="image" width={30} height={30} className="rounded-full"/>
      <span className="capitalize text-[30px] ">{reli.author}</span>
      </div>
      <span>{reli.date_posted}</span>
      <span>{reli.read_time}</span>
      
      </div>
      <div className="w-[60%] m-auto">
        {reli.content.map(con =>(
          <p className="mt-4 text-justify">{con}</p>
        ))}
      </div>
    </main>
  )
}
