import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    alt: string;
    image: string;
  };
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  socialLinks: [
    icon: string,
    url: string,
    name: string
  ];
  skills: string[];
};

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: Date;
  endDate: Date;
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  logo: string;
  coverImage: {
    alt: string | null;
    image: string;
  };
  description: PortableTextBlock[];
};

export type MasonryProps<T> = React.ComponentPropsWithoutRef<"div"> & {
  items: T[];
  render: (item: T, idx: number) => React.ReactNode;
  config: {
    columns: number | number[];
    gap: number | number[];
    media?: number[];
  };
};