import Link from "next/link"
import {  FaApple, FaFacebookF } from "react-icons/fa"
import { FcGoogle }from "react-icons/fc"

export default function page() {
  return (
    <div className=" m-auto">
        <ul className='font-extrabold text-black text-xl mt-10 text-center mb-5'>
            <li className="capitalize">get started with</li>
            <div className="flex justify-center items-center">
              <div>
            <div className='bg-gray-300 text-black mt-4 px-4 rounded-full shadow-x1 flex justify-between items-center'>
            <FaApple />
            <li className=" mx-10">apple</li>
            </div>
            <div className='bg-gray-300 text-black mt-4 px-4 rounded-full shadow-x1 flex justify-between items-center'>
            <FcGoogle   className=" text-blue-900 "/>
            <li className=" mx-6">google</li>
            </div>
            <Link href='https://www.facebook.com/c/abibatomotoyosiabdulraheem' className='bg-gray-300 text-black mt-4 px-4 rounded-full shadow-x1  flex justify-between items-center'>
            <FaFacebookF className=" text-blue-900"/>
            <li className=" mx-4">facebook</li>
            </Link>
            </div>
            </div>
        </ul>
        <div className="flex justify-center items-center text-xl">
        <p>Have an account <Link href={"/login"} className="font-bold hover:underline">login</Link></p>
        </div>
    </div>
  )
}
