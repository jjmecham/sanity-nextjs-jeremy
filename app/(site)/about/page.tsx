import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";
import Contact from "../components/global/Contact";


export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="w-screen max-w-screen-xl px-6 mx-auto border-x border-l-primary border-r-accent">
      <section>
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
              <div className="order-2 lg:order-none">
                <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8">
                  I&apos;m {data.fullName}. I live in {data.location} and  I love to create solutions for the web.
                </h1>

                <div className="flex flex-col gap-y-3 leading-relaxed">
                  <PortableText value={data.fullBio} />
                </div>
              </div>

              <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12 ">
                <div>
                  <Image
                    className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top border-4 border-secondary"
                    src={data.profileImage.image}
                    width={400}
                    height={400}
                    quality={100}
                    alt={data.profileImage.alt}
                  />

                  <a
                    href={`${data.resumeURL}?dl=${data.fullName}_resume.pdf`}
                    className="flex items-center justify-center gap-x-2 border border-transparent hover:border-zinc-500 rounded-md duration-200 py-2 text-center cursor-pointer font-medium"
                  >
                    <BiFile className="text-base" /> Download Resumé
                  </a>
                </div>

                <ul>
                  <li>
                    <Contact/>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mt-12 max-w-2xl">
              <h2 className="font-semibold text-4xl mb-4">My Current Preferred Tools</h2>
              <p className="max-w-lg">
                I&apos;ve used these tools past and present (some more than others), and I continue to evolve with modern technologies.
              </p>
              <ul className="flex flex-wrap items-center gap-3 mt-8">
                {data.skills.map((skill, id) => (
                  <li
                    key={id}
                    className="btn btn-outline"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        ))}
        </section>
    </main>
  );
}
