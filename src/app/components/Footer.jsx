import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { ImYoutube } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-between bg-slate-200 items-start capitalize py-6 px-10">
      <ul className=" text-gray-600 text-[15px]">
        <li className="font-bold capitalize text-gray-800 text-xl">get started</li>
        <Link href='/login'>
          <li className="hover:underline cursor-pointer">sign in</li>
        </Link>

        <Link href='/started'>
          <li className="hover:underline cursor-pointer">sign up</li>
        </Link>

        <Link href='/'>
          <li className="hover:underline cursor-pointer">read</li>
        </Link>

        <Link href='/'>
          <li className="hover:underline cursor-pointer">write</li>
        </Link>

      </ul>
      <ul className=" text-gray-600 text-[15px]">

          <li className="font-bold capitalize text-gray-800 text-xl hover:underline">blogs</li>

        <Link href='/sports'>
          <li  className="hover:underline cursor-pointer hover:text-black">sports</li>
        </Link>

        <Link href='/javas'>
          <li  className="hover:underline cursor-pointer">javaScript</li>
        </Link>

        <Link href='/business'>
          <li  className="hover:underline cursor-pointer">business</li>
        </Link>

        <Link href='/foods'>
          <li  className="hover:underline cursor-pointer">foods</li>
        </Link>

        <Link href='/html'>
          <li  className="hover:underline cursor-pointer">html</li>
        </Link>

        <Link href='/sports'>
          <li  className="hover:underline cursor-pointer">sports</li>
        </Link>

        <Link href='/fashion'>
          <li  className="hover:underline cursor-pointer">fashion</li>
        </Link>

        <Link href='/entertainment'>
          <li  className="hover:underline cursor-pointer">entertainment</li>
        </Link>

        <Link href='/politics'>
          <li  className="hover:underline cursor-pointer">politics</li>
        </Link>

        <Link href='/'>

        </Link>

      </ul>
      <ul className=" text-gray-600 text-[15px]">
        <li className="font-bold capitalize text-gray-800 text-xl">about us</li>
        <li className="hover:underline cursor-pointer">privacy & policy</li>
        <li className="hover:underline cursor-pointer">terms & conditions</li>
        <li className="hover:underline cursor-pointer">help</li>
      </ul>
      <ul className=" text-gray-600 text-[15px]">
        <li className="font-bold capitalize text-gray-800 text-xl">contact us</li>
        <li className="flex justify-between">
        <Link href='https://www.instagram.com/mo_bonike_?igsh=MWt2ZXRmazBpYWl4cA=='>
          <Image src="/ig1.png" alt="insta" width={20} height={20}/>
        </Link>
        <Link href='https://www.facebook.com/c/abibatomotoyosiabdulraheem'>
          <FaSquareFacebook className="text-blue-600"/>
        </Link>
        <Link href='https://www.youtube.com/omotoyosiadeola4680'>
          <ImYoutube className="text-red-600"/>
        </Link>
        <Link href='https://www.linkedin.com/in/omotoyosi-adeola-0b6994208'> 
          <FaLinkedin className="text-blue-700"/>  
        </Link> 
        <Link href='https://www.twitter.com/omotoyosiade25'>
          <FaSquareXTwitter className="text-black"/>
        </Link>
        </li>
        <Link href="mailto:omotoyosiade25@gmail.com">
          
        <li className="capitalize mt-2 hover:underline">email me</li>
        </Link>
        <li>+234(0)7025311681</li>
      </ul>
      <p className=" ml-10">&copy; Blogging Platform {new Date().getFullYear()}</p> 
    </footer>
   
  )
}
