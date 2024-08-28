import Image from "next/image";
import { getJob } from "@/sanity/sanity.query";
import type { JobType } from "@/types";

export default async function Job() {
  const job: JobType[] = await getJob();

  return (
    <section className="mt-8 p-6">
      <div className="mb-16">
        <h2 className="font-semibold text-4xl mb-4">Recent Work Experience</h2>
      </div>

      <div className="flex flex-col gap-y-12">
        {job.map((data) => (
          <div
            key={data._id}
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4rem] before:left-7 before:w-[2px] before:h-[calc(100%-25px)] before:bg-accent"
          >
            <a
              href={data.url}
              rel="noreferrer noopener"
              className="min-h-[55px] min-w-[55px] rounded-md overflow-clip relative border-2 border-secondary"
            >
              <Image
                src={data.logo}
                className="object-cover"
                alt={`${data.name} logo`}
                fill
              />
            </a>
            <div className="flex flex-col items-start ml-1">
              <h3 className="text-xl font-bold">{data.name}</h3>
              <p>{data.jobTitle}</p>
              <small className="text-sm mt-2 tracking-widest uppercase">
                {data.startDate.toString()} - {data.endDate.toString()}
              </small>
              <p className="text-accent my-4">{data.description}</p>
            </div>
          </div>
        ))}


      <ul className="timeline timeline-vertical lg:timeline-horizontal hidden">
      {job.map((data) => (
        <li key={data._id}>
          <hr />
          <div className="timeline-start">
          <a
              href={data.url}
              rel="noreferrer noopener"
              className="block min-h-[60px] min-w-[60px] rounded-md overflow-clip relative bg-white"
            >
              <Image
                src={data.logo}
                className="object-cover"
                alt={`${data.name} logo`}
                height="60"
                width="60"
              />
            </a>
            <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                {data.startDate.toString()} - {data.endDate.toString()}
            </small>
          </div>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end timeline-box">
          <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold">{data.name}</h3>
              <p>{data.jobTitle}</p>
              <p className="text-accent my-4">{data.description}</p>
            </div>
          </div>
        </li>
      ))}
      </ul>
      </div>
    </section>
  );
}
