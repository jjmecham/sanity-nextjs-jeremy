'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <p>Loading...</p>
  )

  if (resolvedTheme === 'dim') {
    // return <div className="mt-2 cursor-pointer text-primary"><FiSun onClick={() => setTheme('retro')}/></div>
    return <div className="mt-2 cursor-pointer text-primary"><span onClick={() => setTheme('retro')}>Light</span></div>
  }

  if (resolvedTheme === 'retro') {
    // return <div className="mt-2 cursor-pointer text-primary"><FiMoon onClick={() => setTheme('business')} /></div>
    return <div className="mt-2 cursor-pointer text-primary"><span onClick={() => setTheme('business')}>Dark</span></div>
  }

  if (resolvedTheme === 'business') {
    // return <div className="mt-2 cursor-pointer text-primary"><FiSun onClick={() => setTheme('emerald')} /></div>
    return <div className="mt-2 cursor-pointer text-primary"><span onClick={() => setTheme('emerald')}>Light</span></div>
  }
  
  else if (resolvedTheme === 'emerald'){
    // return <div className="mt-2 cursor-pointer text-primary"><FiMoon onClick={() => setTheme('dim')} /></div>
    return <div className="mt-2 cursor-pointer text-primary"><span onClick={() => setTheme('dim')}>Dark</span></div>
  }

}