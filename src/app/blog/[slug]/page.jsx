import { blog } from "@/app/components/BlogFile"
import Image from "next/image"

export default function page({params}) {
  const platform = blog.find(art => art.sub_title.split(' ').join('') == params.slug)

  return (
  <main>
    <h2 className="font-bold text-3xl text-center capitalize">{platform.blog_title}</h2>
    <Image src={platform.image} alt="plat" width={500} height={300} className="m-auto mt-10"/>
    <div className="text-center text-gray-400 text-xl capitalize">{platform.sub_title}</div>
    <div className="text-right mr-64 text-gray-600 font-medium text-[15px] space-x-2">
      <div className="flex items-center w-[60%] m-auto">
      <Image src={platform.author_image} alt="image" width={30} height={30} className="rounded-full"/>
      <span className="capitalize text-[30px] ">{platform.author}</span>
      </div>
      <span>{platform.date}</span>
      <span>{platform.read_time}</span>
      
      </div>
      <main>
      <div className="w-[60%] m-auto">
        {platform.article.map((art, index) => (
          <p key={index} className="mt-4 text-justify">{art}</p>
        ))}
      </div>
    </main>
  </main>
  )
}
