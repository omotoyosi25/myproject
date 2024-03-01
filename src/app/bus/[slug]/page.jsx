import { contents } from "@/app/business/page"
import Image from "next/image"

export default function page({params}) {
    const busy = contents.find(busi => busi.subtitle.split(' ').join('') == params.slug)
  return (
    <main>
      <h2 className="font-bold text-3xl text-center mt-10 capitalize">{busy.subtitle}</h2>
    <Image src={busy.images} alt="plat" width={300} height={300} className="m-auto mt-10"/>
    <div className="text-center text-gray-400 mt-5 text-xl capitalize">{busy.title}</div>
    <div className="text-right mr-64 text-gray-600 font-medium text-[15px] space-x-2">
      <div className="flex items-center w-[60%] m-auto">
      <Image src={busy.authors_img} alt="image" width={30} height={30} className="rounded-full"/>
      <span className="capitalize text-[20px] ">{busy.author}</span>
      </div>
      <span>{busy.dat}</span>
      <span>{busy.read}</span>
      </div>
          <div className="w-[60%] m-auto">
            {busy.articles.map((arti, index) =>(
              <p key={index} className="mt-4 text-justify">{arti}</p>
              ))}
          </div>
    </main>
  )
}
