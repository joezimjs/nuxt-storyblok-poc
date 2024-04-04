import {StoryblokStory} from 'storyblok-generate-ts'

export interface FeatureStoryblok {
  name?: string;
  _uid: string;
  component: "Feature";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: FeatureStoryblok[];
  _uid: string;
  component: "Grid";
  [k: string]: any;
}

export interface PageStoryblok {
  title: string;
  body?: (FeatureStoryblok | GridStoryblok | PageStoryblok | TeaserStoryblok)[];
  _uid: string;
  component: "Page";
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  text?: RichtextStoryblok;
  _uid: string;
  component: "Teaser";
  [k: string]: any;
}
