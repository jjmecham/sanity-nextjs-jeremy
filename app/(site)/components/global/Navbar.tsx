'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../icons/logo.png";
import ThemeSwitch from "../ThemeSwitch";
import { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {
  const currentPath = usePathname();
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ]
  const isActive = (path: string) => {
    return currentPath === path;
  }

  const [toggle, setToggle] = useState(false);
  return (
    <header className="py-6 border-b-2 border-primary z-30 md:mb-16 mb-16 bg-secondary">
      <div className="w-screen max-w-screen-xl mx-auto flex items-center justify-between lg:px-2 sm:px-10">
        <div className="flex flex-col items-center">
          <Link href="/" className="w-60 flex justify-between items-center text-primary">
            <Image src={Logo} width={75} height={75} alt="logo" /><h3>GLEAM GRAPHICS</h3>
          </Link>
          <ThemeSwitch />
          <span className="text-[8px] pt-1">change</span>
        </div>
        <nav>
          <div className='text-3xl text-primary cursor-pointer lg:hidden' onClick={() => setToggle(prev => !prev)}>
            {toggle ? <BiMenuAltRight /> : <AiOutlineClose />}
          </div>
          <ul className="hidden lg:flex items-center gap-x-8">
            {pages.map((page, index) => (
              <li key={index}>
                <Link href={page.path} className={isActive(page.path) ? 'active' : ''}>
                  {page.name}
                </Link>
              </li>))}
          </ul>

          {!toggle && <div className='w-full lg:hidden'>
            <div className='flex flex-col py-5 justify-center'>
              <ul className="">
                {pages.map((page, index) => (
                  <li key={index}>
                    <Link href={page.path} className={isActive(page.path) ? 'active' : ''}>
                      {page.name}
                    </Link>
                  </li>))}
              </ul>
            </div>
          </div>}
        </nav>
      </div>
    </header>
  );
}
