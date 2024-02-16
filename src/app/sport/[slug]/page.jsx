import { ball } from '@/app/sports/page'
import Image from 'next/image'


export default function page({params}) {
    const foot = ball.find(spot => spot.title.split(' ').join('') == params.slug)
  return (
    <main>
       <div className='font-bold text-3xl text-center mt-10'>{foot.title}</div>
        <Image src={foot.image} alt='code' width={400} height={300} className='m-auto mt-10'/>
        <div className='text-gray-400 text-center text-xl font-medium mt-5'>{foot.subtitle}</div>
        <div className="text-right mr-64 text-gray-600 font-medium text-[15px] space-x-2">
      <div className="flex items-center w-[60%] m-auto">
      <Image src={foot.author_image} alt="image" width={30} height={30} className="rounded-full"/>
      <span className="capitalize text-[20px] ">{foot.author}</span>
      </div>
      <span>{foot.read_time}</span>
      <span>{foot.date_posted}</span>
      </div>
          <div className="w-[60%] m-auto">
            {foot.article.map(con =>(
              <p className="mt-4 text-justify">{con}</p>
              ))}
          </div> 
    </main>
  )
}
