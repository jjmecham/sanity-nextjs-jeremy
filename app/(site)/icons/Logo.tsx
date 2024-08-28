'use client'

import Image from 'next/image'
 
export default function Logo() {
  return (
    <Image
      src="/logo.png"
      width={1036}
      height={537}
      alt="Gleam Graphics Logo"
      className="mx-auto w-full lg:w-5/12 md:w-80 sm:w-48"
    />
    // <h1>nothing to see here</h1>
  )
}
