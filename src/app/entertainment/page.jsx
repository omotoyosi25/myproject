import React from 'react'
import { blogCard } from '../components/BlogCard'
import Image from 'next/image'

const entertainment = blogCard.filter(card => card.category === 'entertainment')


export default function page() {
  return (
    <section>
      {entertainment.map(blog => (
        <aside key={Math.random()} className='mt-2 rounded-2xl shadow-2xl'>
          <h2 className='font-bold text-4xl text-center mt-10'>{blog.blog_title}</h2>
          <Image src={blog.image} alt='blog' height={300} width={1000} className='items-center mt-10 mx-10'/>
          <div className=''>
          <h2 className='text-[20px] text-gray-500'>{blog.sub_title}</h2>
          {/* <p>{blog.}</p> */}
          {/* <h2>{blog.image}</h2> */}
          </div>
        </aside>
      ))}
    </section>
  )
}
