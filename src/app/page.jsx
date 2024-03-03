
import { EmblaCarousel } from './components/Carousel'
import BlogCard from './components/BlogCard'
import { blog } from './components/BlogFile'



export default function page() {
  return (
    <main>
      {/* <Navbar className=''/> */}
    <section>
     {/* {<EmblaCarousel/>} */}
      <div className=''> 
      <BlogCard card = {blog}/>
      </div>
      </section>
    </main>
  )
}
