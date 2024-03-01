import Link from 'next/link'

export default function Filtereditems() {
  return (
    <nav>
        <ul className='flex text-[12px]'>
            <Link href='/entertainment'>
            <li className='hover:underline text-black hover:opacity-100 hover:text-slate-500 mt-4 capitalize px-4'>entertainment</li>
            </Link>
            <Link href='/html'>
            <li className='hover:underline text-black hover:opacity-100 hover:text-slate-500 mt-4 capitalize px-4'>html</li>
            </Link>
            <Link href='/religion'>
            <li className='hover:underline text-black hover:opacity-100 hover:text-slate-500 mt-4 capitalize px-4'>religion</li>
            </Link>
            <Link href='/business'>
            <li className='hover:underline text-black hover:opacity-100 hover:text-slate-500 mt-4 capitalize px-4'>business</li>
            </Link>
            <Link href='/politics'>
            <li className='hover:underline text-black hover:opacity-100 hover:text-slate-500 mt-4 capitalize px-4'>politics</li>
            </Link>
            <Link href='/foods'>
            <li className='hover:underline text-black hover:opacity-100 hover:text-slate-500 mt-4 capitalize px-4'>foods</li>
            </Link>
            <Link href='/sports'>
            <li className='hover:underline text-black hover:opacity-100 hover:text-slate-500 mt-4 capitalize px-4'>sports</li>
            </Link>
            <Link href='/fashion'>
            <li className='hover:underline text-black hover:opacity-100 hover:text-slate-500 mt-4 capitalize px-4'>fashion</li>
            </Link>
        </ul>
    </nav>
  )
}
