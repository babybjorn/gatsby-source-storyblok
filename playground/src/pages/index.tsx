import { graphql } from "gatsby";
import * as React from "react";

import { StoryblokStory } from "@babybjorn/gatsby-source-storyblok";

import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1>{data.storyblokEntry.name}</h1>
      <StoryblokStory story={data.storyblokEntry} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: { eq: "gatsby/playground-v5" }) {
      content
      name
      full_slug
      uuid
      id
      internalId
    }
  }
`;
