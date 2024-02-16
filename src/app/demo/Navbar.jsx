import Link from 'next/link'
import React from 'react'

export default function Navbar({data}) {
  return (
    <li>
        <Link href={`/demo/${data}`}>
        {data}
        </Link>
        </li>
  )
}
