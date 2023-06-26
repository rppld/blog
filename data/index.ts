import { data as page } from "./page";
import { data as about } from "./about";
import { data as elsewhere } from "./elsewhere";
import { data as work } from "./work";

export const data = {
  page,
  about,
  elsewhere,
  work,
};

type Link = {
  title?: string;
  text: string;
  href: string;
};

export type Data = {
  page: {
    title: string;
    description: string;
    smallprint: string;
  };
  work: {
    title: string;
    text: string;
    image: {
      url: string;
      padded?: boolean;
    };
    role: string;
    link: Link | null;
    fromYear: string;
    toYear: string | null;
    contributions?: string[];
  }[];
  elsewhere: Link[];
  about: {
    texts: string[];
  };
};
