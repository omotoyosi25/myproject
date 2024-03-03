import Image from 'next/image'
import logo from '../logo/favicon-32x32.png'
import Link from 'next/link'
import Filtereditems from './Filtereditems'

export default function Navbar() {
  return (
    <nav className={`flex md:flex-row flex-col justify-between h-[100px] items-center px-6 bg-slate-300 `}>
      <ul className='flex space-x-2 items-center'>
        <li>
          <Image src={logo} alt='logo' height={40} width={40} />
        </li>
        <li className='text-[15px]'>Blogging platform</li>
      </ul>
      <section className=' '><Filtereditems/></section>
      <ul className='flex space-x-3 items-center justify-around capitalize'>
        <Link href='/' className='font-bold text-xl hover:underline text-zinc-800 cursor-pointer'>our story</Link>
        <Link href='/login' className='hover:underline text-zinc-800'>sign in </Link>
        <Link href='/started'className="capitalize hover:underline">get started</Link>
      </ul>
    </nav>
  );
}
