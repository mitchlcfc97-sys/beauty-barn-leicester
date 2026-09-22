import React from 'react';
import { Metadata } from 'next';
import VideoReviewClient from './VideoReviewClient';

export const metadata: Metadata = {
  title: 'Video Review Room | The Beauty Barn Leicester',
  robots: {
    index: false,
    follow: false,
  },
};

export default function VideoReviewPage() {
  return <VideoReviewClient />;
}
