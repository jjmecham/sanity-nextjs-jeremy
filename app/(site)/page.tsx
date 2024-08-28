import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import Logo from "./icons/Logo";
import Job from "./components/Job";
import { motion } from "framer-motion";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="w-screen max-w-screen-xl px-6 mx-auto border-x border-l-primary border-r-accent">
      
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
       {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                {data.headline}
              </h1>
              <p className="">
                {data.shortBio}
              </p>
              {/* <ul className="flex items-center gap-x-6 my-10">
               { 
                data.socialLinks.map((k, v) => (
                    <li key={k}>
                      <a href={k.url} rel="noreferer noopener">{k.name}</a>
                    </li>
                  ))}

              </ul> */}
            </div>
          ))}
        {/* <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          >test</motion.div> */}
      <Logo/>
      </section>
      <Job />
    </main>
  );
}
  //flex items-center gap-x-3 mb-5 hover:text-zinc-900 duration-300
  //text-base text-zinc-400 leading-relaxed