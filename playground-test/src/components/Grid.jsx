import { StoryblokComponent, storyblokEditable } from "@babybjorn/gatsby-source-storyblok";
import React from "react";

const Grid = ({ blok }) => (
  <ul className="flex py-8 mb-6" {...storyblokEditable(blok)} key={blok._uid} data-test="grid">
    {blok.columns.map((blok) => (
      <li key={blok._uid} className="flex-auto px-6">
        <StoryblokComponent blok={blok} />
      </li>
    ))}
  </ul>
);

export default Grid;
