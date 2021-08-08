import React, { FC } from 'react';

export type SummaryCardProps = {
  site?: string;
  title: string;
  description?: string;
  image?: URL;
  imageAlt?: string;
};

export const SummaryCard: FC<SummaryCardProps> = (props) => {
  return (
    <>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={new URL('https://' + props.site).toString()} />
      <meta name="twitter:title" content={`${props.title}`} />
      <meta name="twitter:description" content="View the album on Flickr." />
      <meta name="twitter:image" content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg" />
    </>
  );
};

export type PlayerCardProps = {};

export const PlayerCard: FC<PlayerCardProps> = (props) => {
  return (
    <>
      <meta name="twitter:card" content="player" />
      <meta name="twitter:site" content="@TwitterDev" />
      <meta name="twitter:title" content="Sample Player Card" />
      <meta
        name="twitter:description"
        content="This is a sample video. When you implement, make sure all links are secure."
      />
      <meta name="twitter:image" content="https://yoursite.com/example.png" />
      <meta name="twitter:player" content="https://yoursite.com/container.html" />
      <meta name="twitter:player:width" content="480" />
      <meta name="twitter:player:height" content="480" />
    </>
  );
};

const TwitterMeta = {
  SummaryCard,
  PlayerCard
};

export default TwitterMeta;
