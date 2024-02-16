import { govern } from '@/app/politics/page'
import Image from 'next/image'

export default function page({params}) {
    const gov = govern.find(govt => govt.title.split(' ').join('') == params.slug)
  return (
    <main>
       <div className='font-bold text-3xl text-center mt-10'>{gov.title}</div>
        <Image src={gov.image} alt='code' width={400} height={300} className='m-auto mt-10'/>
        <div className='text-gray-400 text-center text-xl font-medium mt-5'>{gov.subtitle}</div>
        <div className="text-right mr-64 text-gray-600 font-medium text-[15px] space-x-2">
      <div className="flex items-center w-[60%] m-auto">
      <Image src={gov.author_image} alt="image" width={30} height={30} className="rounded-full"/>
      <span className="capitalize text-[20px] ">{gov.author}</span>
      </div>
      <span>{gov.read_time}</span>
      <span>{gov.date_posted}</span>
      </div>
          <div className="w-[60%] m-auto">
            {gov.content.map(con =>(
              <p className="mt-4 text-justify">{con}</p>
              ))}
          </div> 
    </main>
  )
}
