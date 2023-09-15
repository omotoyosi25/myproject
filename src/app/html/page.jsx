import Image from "next/image"
import { blogCard } from "../components/BlogCard"

const html = blogCard.filter(bcard => bcard.category === 'html')

export default function page() {
  return (
    <div className="grid grid-cols-3">
        {html.map(card => (
            <aside key={Math.random()} className="border-4 border-solid border-gray-700 rounded-2xl shadow-2xl">
                <Image src={card.image} alt="card" height={300} width={300}/>
            <h2>{card.image}</h2>
            </aside>
        ))}
    </div>
  )
}
