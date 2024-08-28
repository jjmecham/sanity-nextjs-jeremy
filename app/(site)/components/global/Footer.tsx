import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { data } from "autoprefixer";
import Image from 'next/image'
import Link from "next/link";
import { FaSquareXTwitter, FaLinkedin, FaSquareFacebook, FaSquareGithub, FaSquareYoutube } from "react-icons/fa6";

export default async function Footer() {
  const profile: ProfileType[] = await getProfile();
  return (
  <footer className="footer items-center flex justify-evenly p-4 bg-primary text-primary-content mt-6 border-t-4 border-accent">
        <aside className="items-center grid-flow-col">
        <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="Gleam Graphics Logo"
          />
          <div className="text-sm duration-200 font-mono">
                All content rights reserved &copy; {new Date().getFullYear()}
                <p className="flex items-center">Assembled by <span className="bg-accent mx-2 p-1 border-2 border-black rounded-sm">Jeremy Mecham</span>
                <span className='text-[10px] text-secondary'>with props to the dev community</span>
                </p>
          </div>
        </aside> 
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {/* {profile &&
            profile.map((data) => (
                <div key={data._id}>
                  {data.socialLinks.map((links) => {
                        return <a href="" key={links}>[links.icon]</a>
                    })}  

                  {data.socialLinks.map((o, _key) => (
                    <div key={_key} className="grid grid-flow-col gap-4">
                      <a href={o.url}>{o.icon}</a>
                    </div>
                  ))}
            </div>
            
         ))} */}
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/jeremymecham/" target="_blank"><FaLinkedin size={30}/></a>
            <a href="https://github.com/jjmecham" target="_blank"><FaSquareGithub size={30}/></a>
            <a href="http://www.youtube.com/@JeremyMecham" target="_blank"><FaSquareYoutube size={30}/></a>
            <a href="https://facebook.com/jeremymecham/" target="_blank"><FaSquareFacebook size={30}/></a>
            <a href="https://twitter.com/JeremyMecham" target="_blank"><FaSquareXTwitter size={30}/></a>
          </div>
        </nav>
</footer>
  );
}
