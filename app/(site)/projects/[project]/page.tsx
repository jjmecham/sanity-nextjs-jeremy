import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { getSingleProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
// import fallBackImage from "@/public/project.png";

type Props = {
  params: {
    project: string;
  };
};

// Dynamic metadata for SEO
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const slug = params.project;
//   const project: ProjectType = await getSingleProject(slug);

//   return {
//     title: `${project.name} | Project`,
//     description: project.tagline,
//     openGraph: {
//       images:
//         project.coverImage?.image ||
//         "https://res.cloudinary.com/victoreke/image/upload/v1689892912/docs/project.png",
//       title: project.name,
//       description: project.tagline,
//     },
//   };
// }

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return (
    <main className="max-w-7xl mx-auto px-6 border-x border-l-primary border-r-accent">
      <section className="mb-16">
      <Link
            href="/projects"
            className="text-accent text-xs hover:brightness-75">
            Back to Projects
      </Link>
      <div className="mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {project.name}
          </h1>

          <a
            href={project.projectUrl}
            rel="noreferrer noopener"
            className="btn btn-primary rounded-sm px-4 py-2"
          >
            Explore
          </a>
        </div>

        <Image
          className="rounded-sm border border-zinc-800"
          width={900}
          height={460}
          src={project.coverImage?.image}
          alt={project.coverImage?.alt || project.name}
        />

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
          <PortableText value={project.description} />
        </div>
      </div>
      </section>
    </main>
  );
}
