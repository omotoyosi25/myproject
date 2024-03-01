import React from 'react'
import Navbar from './components/Navbar'
import { EmblaCarousel } from './components/Carousel'
import BlogCard, { blogCard } from './components/BlogCard'
import Filtereditems from './components/Filtereditems'


export default function page() {
  return (
    <main>
      {/* <Navbar className=''/> */}
    <section>
     {/* {<EmblaCarousel/>} */}
      <div className=''> 
      <BlogCard card = {blogCard}/>
      </div>
      </section>
    </main>
  )
}
