
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import Grid from "../components/ImageGrid";

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="w-screen max-w-screen-xl px-6 mx-auto border-x border-l-primary border-r-accent">
      
      <Grid />

    </main>
  );
}
