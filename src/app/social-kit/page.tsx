import React from 'react';
import { Metadata } from 'next';
import SocialKitClient from './SocialKitClient';

export const metadata: Metadata = {
  title: 'Social Media Kit | The Beauty Barn',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SocialKitPage() {
  return <SocialKitClient />;
}
