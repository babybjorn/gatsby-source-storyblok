"use client";

import { StoryblokComponent } from "@storyblok/react";
import React, { forwardRef } from "react";
import { useStoryblokState } from "./src/common";
import { SbGatsbyStory, StoryblokBridgeConfigV2 } from "./types";

interface StoryblokStoryProps {
  story: SbGatsbyStory;
  bridgeOptions: StoryblokBridgeConfigV2;
}

const StoryblokStory = forwardRef<
  HTMLElement,
  StoryblokStoryProps & Record<string, unknown>
>((props, ref) => {
  const { story, bridgeOptions, ...restProps } = props as StoryblokStoryProps &
    Record<string, unknown>;
  const updatedStory = useStoryblokState(story, bridgeOptions);
  return (
    <StoryblokComponent ref={ref} blok={updatedStory.content} {...restProps} />
  );
});

export default StoryblokStory;
