import React, { FC, Fragment } from 'react';

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

export type AppCardProps = {};

const AppCard: FC<AppCardProps> = (props) => {
  return (
    <>
      <meta name="twitter:card" content="app" />
      <meta name="twitter:site" content="@TwitterDev" />
      <meta
        name="twitter:description"
        content="Cannonball is the fun way to create and share stories and poems on your phone. Start with a beautiful image from the gallery, then choose words to complete the story and share it with friends."
      />
      <meta name="twitter:app:country" content="US" />
      <meta name="twitter:app:name:iphone" content="Cannonball" />
      <meta name="twitter:app:id:iphone" content="929750075" />
      <meta name="twitter:app:url:iphone" content="cannonball://poem/5149e249222f9e600a7540ef" />
      <meta name="twitter:app:name:ipad" content="Cannonball" />
      <meta name="twitter:app:id:ipad" content="929750075" />
      <meta name="twitter:app:url:ipad" content="cannonball://poem/5149e249222f9e600a7540ef" />
      <meta name="twitter:app:name:googleplay" content="Cannonball" />
      <meta name="twitter:app:id:googleplay" content="io.fabric.samples.cannonball" />
      <meta name="twitter:app:url:googleplay" content="http://cannonball.fabric.io/poem/5149e249222f9e600a7540ef" />
    </>
  );
};

const TwitterMeta = {
  SummaryCard,
  PlayerCard,
  AppCard,
};

export default TwitterMeta;
