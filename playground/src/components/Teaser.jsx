import { storyblokEditable } from "@babybjorn/gatsby-source-storyblok";
import * as React from "react";

const Teaser = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} data-test="teaser">
      <h1>{blok.headline}</h1>
    </div>
  )
}

export default Teaser