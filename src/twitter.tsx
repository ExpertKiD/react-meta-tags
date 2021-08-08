import React, { FC } from 'react';

type SummaryCardProps = {
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

const TwitterMeta = {
  SummaryCard,
};

export default TwitterMeta;
