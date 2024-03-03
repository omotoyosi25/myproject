"use client"
import React, { useState } from "react" 
import Image from 'next/image'
import Link from 'next/link'
import { blog } from "./BlogFile"

export default function Filtereditems() {
    const [searchItem, setsearchItem] = useState('')

    const itemfiltered = blog.filter(card => card.category.toLowerCase().includes(searchItem.toLowerCase()) || card.blog_title.toLowerCase().includes(searchItem.toLowerCase()) || card.author.toLowerCase().includes(searchItem.toLowerCase()) || card.sub_title.toLowerCase().includes(searchItem.toLowerCase()))
    function abibat(e) {
        setsearchItem(e.target.value)
    }


    const cardDetails = itemfiltered.length > 0 ? itemfiltered.map((art, index) => (
        <article key={index} className='rounded-2xl bottom-2 border-solid border-gray-500'>
            <div className='grid grid-cols md:grid-cols-2 pl-8 space-x-2 py-6 '>
                <div>
                    <Link href={`/blog/${art.sub_title.split(' ').join('')}`}>
                        <div>
                            <h2 className='font-bold text-3xl capitalize'>{art.blog_title}</h2>
                            <h2 className='text-xl'>{art.sub_title}</h2>
                        </div>
                    </Link>

                    <div className=''>
                        <span>{art.date}</span>
                        <span>{art.read_time}</span>
                        <Link href='/' className='bg-gray-200 rounded-3xl  text-center py-1 px-6'>{art.category}</Link>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image src={art.image} alt='blog-img' width={150} height={100} className=""/>
                </div>
            </div>
            
        </article>
    ))
    :
    (
        <h2 className='flex justify-center items-center text-center m-auto text-2xl text-red-800'>No Search Results Found!!!</h2>
    )
    return (
        <>
        <div>
            <div className="flex items-center justify-center my-5 border-t-black">
                <input type="text" placeholder="Type your search here......" onChange={abibat} value={searchItem} className='w-[40%] outline-none  py-2 border-b-2 border-solid border-b-black'/>
            </div>
            <div>

            </div>
            {cardDetails}
            </div>
        </>
    )
}

// export default function BlogCard() {
//     return (
//         <section>
//             {cardDetails}
//         </section>
//     )
// }
