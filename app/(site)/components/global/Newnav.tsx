import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.png";

export default function Navbar() {
return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src='../../icons/logo.png' width={200} height={200} alt="logo" />
        </Link>

<nav className="w-screen bg-teal-500 h-fit overflow-hidden">
        <div className="py-4 lg:px-8 px-4 max-w-[1280px] h-16 m-auto text-white flex items-center justify-between">
            <div>
                <h1 className="lg:text-2xl text-xl uppercase tracking-wider cursor-pointer font-bold">Document</h1>
            </div>
            <div className="flex lg:gap-8 gap-6 uppercase tracking-wider cursor-pointer text-lg items-center" id="navItems">
                <span className="group">
                    Services
                    <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
                </span>
                <span className="group">
                    About
                    <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
                </span>
                <span className="group">
                    Contact
                    <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
                </span>
            </div>
            <div id="hamburger" className="fa fa-bars flex items-center text-xl md:hidden"></div>
            <div id="mobileNav"
                className="fixed flex flex-col gap-8 pt-16 px-4 text-xl uppercase bg-teal-500 h-full inset-0 top-16 w-[70%] left-[-70%] ease-in-out duration-500 cursor-pointer">
                <span>Services</span>
                <span>About</span>
                <span>Contact</span>
            </div>
        </div>
    </nav>
    </div>

<label className="flex cursor-pointer gap-2">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
<input type="checkbox" value="sunset" className="toggle theme-controller"/>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
</header>
);
}