import Image from 'next/image'
import React from 'react'
import style from "../style.module.css"
import Link from 'next/link'

export const contents =[
    {
      id: 1,
      title: "Navigating Challenges and Embracing Opportunities",
      subtitle:"The Future of Remote Work",
      author: "John Smith",
      authors_img: "/author2.jpg",
      images: "/remote.jpg",
      read: "2 mins",
      dat: "Dec 8",
      articles:[
        "The business landscape is undergoing a radical shift towards remote work, presenting both challenges and opportunities for companies worldwide.",
        "One of the key challenges companies face is maintaining effective communication and collaboration among remote teams. As the traditional office setting evolves, businesses must adapt by implementing robust digital communication tools and fostering a culture of virtual collaboration.",
        "On the flip side, the move to remote work opens up new possibilities for talent acquisition. Companies can tap into a global pool of skilled professionals, fostering diversity and innovation. Embracing remote work isn't just a response to external circumstances; it's an investment in the future of work."
      ]
    },
    {
      id: 2,
      title: "Navigating Economic Uncertainty: in a Volatile Market",
      subtitle: "Strategies for Businesses",
      author: "Emily Johnson",
      authors_img: "/author2.jpg",
      images: "/strategy.jpg",
      read: "2 mins",
      dat: "Dec 8",
      articles: [
        "In an era marked by economic uncertainty, businesses need resilient strategies to navigate through volatile markets and ensure long-term success.",
        "Diversification is a key principle for mitigating risk. Companies should diversify their product or service offerings, customer base, and geographical presence. This strategy provides a buffer against economic downturns in specific sectors or regions.",
        "Furthermore, agility is crucial. Businesses that can quickly adapt to changing market conditions, consumer behaviors, and technological advancements are better positioned to thrive. This adaptability requires a proactive approach to monitoring industry trends and a willingness to embrace innovation."
      ]
    },
    {
      id: 3,
      title: "The Role of Sustainability in Business",
      subtitle:"Building a Greener Future",
      author: "Alexandra Green",
      authors_img: "/author2.jpg",
      images: "/sustaining.jpg",
      read: "2 mins",
      dat: "Dec 8",
      articles: [
        "Sustainability is no longer just a buzzword; it's a fundamental aspect of responsible business practices. Companies that prioritize sustainability not only contribute to environmental well-being but also enhance their brand reputation and attract a growing eco-conscious consumer base.",
        "Implementing sustainable practices goes beyond environmental initiatives. It involves creating a holistic approach that considers social responsibility and ethical business conduct. From supply chain transparency to reducing carbon footprint, businesses play a crucial role in building a greener and more equitable future.",
        "Consumers are increasingly making choices based on a company's commitment to sustainability. Embracing eco-friendly practices isn't just a moral obligation; it's a strategic move that can drive innovation, reduce costs, and position businesses as leaders in the global shift towards a more sustainable economy."
      ]
    }
  ]
  
  const content = contents.map(busi =>(
    <article key={busi.id} className='text-center grid justify-center items-center'>
        <Link href={`/bus/${busi.subtitle.split(' ').join('')}`}>
        <Image src={busi.images} alt='image' width={300} height={300} className={style.business}/>
        <h2 className='text-xs font-bold'>
            {busi.subtitle}
        </h2>
        </Link>
    </article>
  ))


export default function page() {
  return (
    <main className='grid grid-cols-3 mt-5 items-center m-auto w-4/5'>
        {content}
    </main>
  )
}
