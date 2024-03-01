import { food } from '@/app/foods/page'
import Image from 'next/image'
import style from './style/styl.module.css'

export default function page({params}) {
    const foodies = food.find(sushi =>sushi.food_title.split(' ').join('') == params.slug) 
  return (
    <main>
    <Image src={foodies.image} alt="plat" width={300} height={300} className={`m-auto mt-10 ${style.foodie}`}/>
<h2 className="font-bold text-xl text-center mt-3 capitalize text-gray-600">{foodies.food_title}</h2>
    <div className="text-right mr-64 text-gray-600 font-medium text-[15px] space-x-2">
      <div className="flex items-center w-[60%] m-auto">
      <Image src={foodies.writer_image} alt="image" width={30} height={30} className="rounded-full"/>
      <span className="capitalize text-[15px] ">{foodies.writer}</span>
      </div>
      <span>{foodies.date}</span>
      <span>{foodies.read_time}</span>
      
      </div>
      <div className="w-[60%] m-auto">
        {foodies.article.map((art, index) =>(
          <p key={index} className="mt-4 text-justify">{art}</p>
        ))}
      </div>
    </main>
  )
}
