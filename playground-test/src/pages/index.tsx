"use client";
import { graphql } from "gatsby";
import * as React from "react";

import {
  StoryblokComponent,
  storyblokEditable,
  useStoryblokState,
} from "@babybjorn/gatsby-source-storyblok";

import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  let story = useStoryblokState(data.storyblokEntry);

  const components = story.content.body.map((blok) => (
    <StoryblokComponent blok={blok} key={blok._uid} />
  ));

  return (
    <Layout>
      <div {...storyblokEditable(story.content)}>
        <h1>{story.name}</h1>
        {components}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: { eq: "gatsby/test" }) {
      content
      name
      full_slug
      uuid
      id
      internalId
    }
  }
`;
