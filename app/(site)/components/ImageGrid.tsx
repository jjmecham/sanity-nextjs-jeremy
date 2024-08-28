/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import { getJob } from "@/sanity/sanity.query";
import type { JobType } from "@/types";

export default async function Job() {
  const job: JobType[] = await getJob();

  return (
    <section className="mt-32">
      <div className="mb-16">
        <h2 className="font-semibold text-4xl mb-4">Image Grid</h2>



        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">

        <div className="grid gap-2">
            <div>
              <img className="h-full object-cover  max-w-full rounded-lg" src="https://placehold.co/300x400/png" alt="" />
            </div>
            <div>
              <img className="h-full object-cover  max-w-full rounded-lg" src="https://placehold.co/600x700/png" alt="" />
            </div>
            <div>
              <img className="h-full object-cover  max-w-full rounded-lg" src="https://placehold.co/800x1200/png" alt="" />
            </div>
          </div>
          <div className="grid gap-2">
            <div>
              <img className="h-full object-cover  max-w-full rounded-lg" src="https://placehold.co/900x900/png" alt="" />
            </div>
            <div>
              <img className="h-full object-cover  max-w-full rounded-lg" src="https://placehold.co/68500x485/png" alt="" />
            </div>
            <div>
              <img className="h-full object-cover  max-w-full rounded-lg" src="https://placehold.co/300x400/png" alt="" />
            </div>
          </div>
          <div className="grid gap-2">
            <div>
              <img className="h-full object-cover  max-w-full rounded-lg" src="https://placehold.co/300x400/png" alt="" />
            </div>
            <div>
              <img className="h-full object-cover  max-w-full rounded-lg" src="https://placehold.co/600x700/png" alt="" />
            </div>
            <div>
              <img className="h-full object-cover  max-w-full rounded-lg" src="https://placehold.co/800x1200/png" alt="" />
            </div>
          </div>
          <div className="grid gap-2">
            <div>
              <img className="h-full object-cover  max-w-full rounded-lg" src="https://placehold.co/1200x400/png" alt="" />
            </div>
            <div>
              <img className="h-full object-cover  max-w-full rounded-lg" src="https://placehold.co/2000x1000/png" alt="" />
            </div>
            <div>
              <img className="h-full object-cover  max-w-full rounded-lg" src="https://placehold.co/3000x2000/png" alt="" />
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
}
