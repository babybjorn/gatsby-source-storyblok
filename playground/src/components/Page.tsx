import {
  StoryblokComponent,
  storyblokEditable,
} from "@babybjorn/gatsby-source-storyblok";
import React from "react";

const Page = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
