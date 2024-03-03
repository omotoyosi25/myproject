import { fash } from "@/app/components/BlogFile"
import Image from "next/image"


export default function pages({params}) {
    const tro = fash.find(on => on.title.split(' ').join('') == params.slug)
  return (
    <main className="bg-slate-100">
        <h1 className="font-bold text-center text-xl">{tro.title}</h1>
        <Image src={tro.image} alt="tho" width={300} height={300} className="m-auto mt-10"/>
        <div className='text-gray-400 font-medium text-xl mt-5 text-center'>{tro.subtitle}</div>
        <div className='text-gray-600 text-right mr-64 font-medium text-[15px] space-x-2 mt-5'>
        <div className='flex items-center w-[60%] m-auto'>
            <Image src={tro.author_image} alt='imgage' width={30} height={30} className='rounded-full'/>
            <div className='text-[20px] capitalize font-semibold'>{tro.author}</div>
            </div>
            <div>{tro.date_posted}</div>
            <div>{tro.read_time}</div>
        </div>

        <div className='m-auto w-[60%]'>
            {tro.content.map((troc, index) => (
                <p key={index} className='mt-4 text-justify'>{troc}</p>
            ))}
        </div>
    </main>
  )
}
