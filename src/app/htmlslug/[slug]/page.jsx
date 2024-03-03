import { code } from '@/app/components/BlogFile' 
import Image from 'next/image'


export default function page({params}) {
    const coding = code.find(cod => cod.title.split(' ').join('') == params.slug)
  return (
    <main>
        <div className='font-bold text-3xl text-center mt-10'>{coding.title}</div>
        <Image src={coding.image} alt='code' width={500} height={300} className='m-auto mt-10'/>
        <div className='text-gray-400 text-center text-xl font-medium mt-5'>{coding.subtitle}</div>
        <div className="text-right mr-64 text-gray-600 font-medium text-[15px] space-x-2">
      <div className="flex items-center w-[60%] m-auto">
      <Image src={coding.authorImage} alt="image" width={30} height={30} className="rounded-full"/>
      <span className="capitalize text-[20px] ">{coding.authorName}</span>
      </div>
      <span>{coding.readTime}</span>
      <span>{coding.datePosted}</span>
      </div>
          <div className="w-[60%] m-auto">
            {coding.content.map((cont, index) =>(
              <p key={index} className="mt-4 text-justify">{cont}</p>
              ))}
          </div>
    </main>
  )
}
