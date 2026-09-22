'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Copy, Check, Download, ArrowLeft, Sparkles, Heart } from 'lucide-react';
import Link from 'next/link';

export default function SocialKitClient() {
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [copiedShort, setCopiedShort] = useState(false);

  const mainCaption = `Same warm welcome, brand new digital sanctuary… ✨🌿

If you’ve visited our website recently, you might have noticed a fresh new look! 

We wanted to reassure all our lovely clients: it is still 100% us! Mel, Zofia, and the same dedicated team here at our tranquil barn sanctuary in Scraptoft. 🤍

Our old website had been with us for a while, and we felt it was time for an online home that truly reflects the calm, luxury experience you feel the moment you walk through our barn doors.

Here’s what’s new for you:
✨ Smoother, lightning-fast online booking via Fresha
✨ Dedicated guides to our Couples Massage double suite & Private Spa Days
✨ Instant digital gift vouchers delivered straight to your inbox
✨ Direct WhatsApp chat if you ever need treatment advice or help booking

Take a peek and let us know what you think:
🔗 thebeautybarnleicester.co.uk (or tap the link in our bio!)

We can’t wait to welcome you back to the barn soon.
With love,
Mel, Zofia & The Beauty Barn Team x

—
#TheBeautyBarn #TheBeautyBarnLeicester #LeicesterSpa #Scraptoft #CouplesMassageLeicester #LeicesterBeauty #BramleyBotanicals #PrivateSpaDays #LeicestershireSpa`;

  const shortCaption = `A fresh new look for The Beauty Barn! 🌾✨

Don’t worry — it’s still the same Mel, Zofia, and the team you know and love! We’ve completely refreshed our website to make booking your treatments, couples packages, and gift vouchers easier and more relaxing than ever.

Tap the link to explore our new digital home 🤍
👉 thebeautybarnleicester.co.uk`;

  const photos = [
    {
      id: 'team',
      title: '1. The Real Team (Most Recommended!)',
      subtitle: 'Instantly lets clients recognize Mel, Zofia & the team',
      src: '/social/2-team.jpg',
      downloadName: 'The-Beauty-Barn-Team.jpg',
    },
    {
      id: 'atmosphere',
      title: '2. Toned-Down Spa Atmosphere',
      subtitle: 'Soft herbal tea, eucalyptus & waffle cotton towels',
      src: '/social/1-atmosphere.jpg',
      downloadName: 'The-Beauty-Barn-Atmosphere.jpg',
    },
    {
      id: 'entrance',
      title: '3. The Barn Entrance',
      subtitle: 'Authentic stone barn entrance clients know well',
      src: '/social/3-entrance.jpg',
      downloadName: 'The-Beauty-Barn-Entrance.jpg',
    },
    {
      id: 'room',
      title: '4. Candlelit Treatment Suite',
      subtitle: 'Warm heated couch and tranquil ambience',
      src: '/social/4-room.jpg',
      downloadName: 'The-Beauty-Barn-Treatment-Room.jpg',
    },
  ];

  const handleCopy = (text: string, type: 'main' | 'short') => {
    navigator.clipboard.writeText(text);
    if (type === 'main') {
      setCopiedCaption(true);
      setTimeout(() => setCopiedCaption(false), 2500);
    } else {
      setCopiedShort(true);
      setTimeout(() => setCopiedShort(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 text-charcoal-900 py-10 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-sage-700 hover:text-bronze-600 transition font-medium mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to website
          </Link>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze-600 block">
            Social Media Kit
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-sage-900">
            Download Photos Straight to Your Phone
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-md mx-auto">
            Tap and hold any photo below to choose <strong className="text-charcoal-900">"Save to Photos"</strong> on your phone, or tap the download button.
          </p>
        </div>

        {/* Photos Grid */}
        <div className="space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-sage-800 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-bronze-500" />
            Announcement Photos (Choose one or use all for a carousel)
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-sm"
              >
                <div className="relative aspect-[4/3] sm:aspect-square w-full bg-cream-100">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 600px"
                  />
                </div>
                <div className="p-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-sm font-bold text-sage-900">{photo.title}</h3>
                    <p className="text-xs text-charcoal-500">{photo.subtitle}</p>
                  </div>
                  <a
                    href={photo.src}
                    download={photo.downloadName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sage-800 text-cream-50 hover:bg-sage-900 transition text-xs font-semibold shadow-sm flex-shrink-0"
                  >
                    <Download className="w-3.5 h-3.5 text-bronze-300" />
                    Save
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Treatment Video Reels (Mobile Downloads) */}
        <div className="space-y-6 pt-4">
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sage-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-bronze-500" />
              Treatment Video Clips (Save for Instagram Reels & Stories)
            </h2>
            <p className="text-xs text-charcoal-600">
              Real treatment footage recorded in the barn. Tap Save to download any clip straight to your phone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                id: 'lash-lift',
                title: 'Lash Lift Treatment',
                subtitle: 'Precision curling & eye artistry',
                src: '/videos/lash-lift-treatment.mp4',
                downloadName: 'Beauty-Barn-Lash-Lift.mp4',
                size: '1.5 MB',
              },
              {
                id: 'hot-stones',
                title: 'Hot Stones Massage',
                subtitle: 'Heated stones & deep tension relief',
                src: '/videos/hot-stone-massage-treatment.mp4',
                downloadName: 'Beauty-Barn-Hot-Stones.mp4',
                size: '3.0 MB',
              },
              {
                id: 'facial-gua-sha',
                title: 'Facial Gua Sha Sculpting',
                subtitle: 'Lymphatic drainage & contouring',
                src: '/videos/facial-gua-sha-sculpting.mp4',
                downloadName: 'Beauty-Barn-Facial-Gua-Sha.mp4',
                size: '1.0 MB',
              },
              {
                id: 'facial-ritual',
                title: 'Facial Botanical Ritual',
                subtitle: 'Botanical application & glowing skin',
                src: '/videos/facial-botanical-ritual.mp4',
                downloadName: 'Beauty-Barn-Facial-Ritual.mp4',
                size: '1.5 MB',
              },
              {
                id: 'body-massage',
                title: 'Body Massage Flow',
                subtitle: 'Swedish bodywork in candlelit room',
                src: '/videos/body-massage-flow.mp4',
                downloadName: 'Beauty-Barn-Body-Massage.mp4',
                size: '5.1 MB',
              },
            ].map((v) => (
              <div
                key={v.id}
                className="bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-sm flex flex-col"
              >
                <div className="relative aspect-[4/5] bg-black">
                  <video
                    src={v.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-3.5 flex items-center justify-between gap-3 bg-white border-t border-cream-200">
                  <div>
                    <h3 className="font-serif text-xs sm:text-sm font-bold text-sage-900">{v.title}</h3>
                    <p className="text-[11px] text-charcoal-500">{v.subtitle} • {v.size}</p>
                  </div>
                  <a
                    href={v.src}
                    download={v.downloadName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sage-800 text-cream-50 hover:bg-sage-900 transition text-xs font-semibold shadow-sm flex-shrink-0"
                  >
                    <Download className="w-3.5 h-3.5 text-bronze-300" />
                    Save
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Captions Section */}
        <div className="bg-white rounded-2xl p-5 border border-cream-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-base font-bold text-sage-900">Instagram & Facebook Caption</h2>
              <p className="text-xs text-charcoal-500">Tap to copy the entire message ready to paste</p>
            </div>
            <button
              onClick={() => handleCopy(mainCaption, 'main')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white text-xs font-semibold shadow transition"
            >
              {copiedCaption ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy Caption
                </>
              )}
            </button>
          </div>

          <pre className="bg-cream-50 p-4 rounded-xl text-xs text-charcoal-800 font-sans whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto border border-cream-200">
            {mainCaption}
          </pre>
        </div>

        {/* Story Caption */}
        <div className="bg-white rounded-2xl p-5 border border-cream-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-base font-bold text-sage-900">Short Version (Stories)</h2>
              <p className="text-xs text-charcoal-500">Short text for Instagram / Facebook story</p>
            </div>
            <button
              onClick={() => handleCopy(shortCaption, 'short')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold shadow transition"
            >
              {copiedShort ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy Short
                </>
              )}
            </button>
          </div>

          <pre className="bg-cream-50 p-4 rounded-xl text-xs text-charcoal-800 font-sans whitespace-pre-wrap leading-relaxed border border-cream-200">
            {shortCaption}
          </pre>
        </div>
      </div>
    </div>
  );
}
