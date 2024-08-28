import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";

export default async function Project() {
  const projects: ProjectType[] = await getProjects();

  return (
    <main className="max-w-screen-xl px-6 mx-auto lg:px-16 border-x border-l-primary border-r-accent">
      <section className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Featured projects I&apos;ve built over the years
        </h1>
        <p className="text-base leading-relaxed">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`}
            key={project._id} 
            className="card card-side border-2 border-accent w-[250px] h-[80px] hover:brightness-75 ease-in-out">
            <figure className="relative w-[90px] object-cover border-r-2 border-accent">
              <Image
                src={project.logo}
                layout="fill"        
                objectFit='cover'
                alt={project.name}
              />
            </figure>
            <div className="card-body p-1 text-center">
              <h2 className="font-semibold">{project.name}</h2>
              <div className="text-sm">{project.tagline}</div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
