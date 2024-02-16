import { entertain } from '@/app/entertainment/page'
import Image from 'next/image'
import React from 'react'

export default function page({params}) {
    const ent = entertain.find(enter => enter.title.split(' ').join('') == params.slug)
  return (
    <main>
        <h2 className='font-bold text-center text-2xl capitalize mt-10'>{ent.title}</h2>
        <Image src={ent.img} alt='img' width={300} height={300} className='m-auto mt-10'/>
        <div className='text-gray-400 font-medium text-xl mt-5 text-center'>{ent.subtitle}</div>
        <div className='text-gray-600 text-right mr-64 font-medium text-[15px] space-x-2 mt-5'>
        <div className='flex items-center w-[60%] m-auto'>
            <Image src={ent.auth_img} alt='imgage' width={30} height={30} className='rounded-full'/>
            <div className='text-[20px] capitalize font-semibold'>{ent.author}</div>
            </div>
            <div>{ent.date_posted}</div>
            <div>{ent.read_time}</div>
        </div>

        <div className='m-auto w-[60%]'>
            {ent.content.map(entr => (
                <p className='mt-4 text-justify'>{entr}</p>
            ))}
        </div>
    </main>
  )
}
