'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Copy,
  Check,
  Download,
  ArrowLeft,
  Sparkles,
  Flame,
  Film,
  Share2,
  Instagram,
  Eye,
  Music,
  Clock,
  MessageSquare,
  Smartphone,
  Tag,
  Lightbulb,
} from 'lucide-react';
import { SOCIAL_REELS, type SocialReel } from '@/data/socialReels';

export default function SocialKitClient() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeCaptionTabs, setActiveCaptionTabs] = useState<Record<string, 'reels' | 'feed' | 'story'>>({});
  const [showOverlays, setShowOverlays] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const mainLaunchCaption = `Same warm welcome, brand new digital sanctuary… ✨🌿

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

  const shortLaunchCaption = `A fresh new look for The Beauty Barn! 🌾✨

Don’t worry — it’s still the same Mel, Zofia, and the team you know and love! We’ve completely refreshed our website to make booking your treatments, couples packages, and gift vouchers easier and more relaxing than ever.

Tap the link to explore our new digital home 🤍
👉 thebeautybarnleicester.co.uk`;

  const launchPhotos = [
    {
      id: 'team',
      title: '1. The Real Team (Mel & Zofia)',
      subtitle: 'Instantly lets clients recognize the therapists they know and love',
      src: '/social/2-team.jpg',
      downloadName: 'The-Beauty-Barn-Team.jpg',
    },
    {
      id: 'double-room',
      title: '2. Real Double Treatment Suite',
      subtitle: 'Twin heated couches, sage waffle blankets & ambient lighting',
      src: '/images/double-room-massage-suite.jpg',
      downloadName: 'The-Beauty-Barn-Double-Room.jpg',
    },
    {
      id: 'nail-station',
      title: '3. The GelBottle Nail & Pedicure Bar',
      subtitle: 'Ceramic pedicure bowl, scrub, and bespoke gel color swatches',
      src: '/images/nail-station-salon.jpg',
      downloadName: 'The-Beauty-Barn-Nail-Station.jpg',
    },
    {
      id: 'entrance',
      title: '4. Authentic Stone Barn Entrance',
      subtitle: 'The historic converted barn entrance clients look out for in Scraptoft',
      src: '/social/3-entrance.jpg',
      downloadName: 'The-Beauty-Barn-Entrance.jpg',
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'All Reels & Videos', count: SOCIAL_REELS.length },
    { id: 'massage', label: 'Massage & Stones', count: SOCIAL_REELS.filter(r => r.category === 'massage').length },
    { id: 'facials', label: 'Facials & Gua Sha', count: SOCIAL_REELS.filter(r => r.category === 'facials').length },
    { id: 'eyes', label: 'Eyes & Lashes', count: SOCIAL_REELS.filter(r => r.category === 'eyes').length },
    { id: 'retreat', label: 'Private Spa & Hot Tub', count: SOCIAL_REELS.filter(r => r.category === 'retreat').length },
    { id: 'nails', label: 'BIAB Nails', count: SOCIAL_REELS.filter(r => r.category === 'nails').length },
    { id: 'fireside', label: 'Fireside Campaign', count: SOCIAL_REELS.filter(r => r.category === 'fireside').length },
    { id: 'launch', label: 'Website Launch Kit', count: 4 },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const toggleOverlay = (reelId: string) => {
    setShowOverlays(prev => ({ ...prev, [reelId]: !prev[reelId] }));
  };

  const setCaptionTab = (reelId: string, tab: 'reels' | 'feed' | 'story') => {
    setActiveCaptionTabs(prev => ({ ...prev, [reelId]: tab }));
  };

  const displayedReels = activeFilter === 'all'
    ? SOCIAL_REELS
    : SOCIAL_REELS.filter(r => r.category === activeFilter);

  return (
    <div className="min-h-screen bg-cream-50 text-charcoal-900 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-sage-700 hover:text-bronze-600 transition font-medium mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to website
          </Link>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bronze-500/10 text-bronze-700 text-xs font-semibold">
            <Share2 className="w-3.5 h-3.5" /> Social Media Marketing & Reels Hub
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-sage-900">
            Instagram Reels & Content Creator
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
            Real treatment videos paired with done-for-you captions, on-screen text hooks, trending sound suggestions, and hashtag banks. Download any video and copy the paired caption straight to your phone.
          </p>

          {/* Quick 3-Step Guide Banner */}
          <div className="max-w-2xl mx-auto mt-4 p-4 rounded-2xl bg-sage-900 text-cream-50 text-left border border-bronze-400/40 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 flex items-center gap-1">
                <Lightbulb className="w-3.5 h-3.5 text-bronze-300" /> Quick Posting Guide
              </span>
              <p className="text-xs text-sage-200">
                1. Tap <strong>&ldquo;Save Video&rdquo;</strong> to download to your camera roll &bull; 2. Tap <strong>&ldquo;Copy Caption&rdquo;</strong> &bull; 3. Paste into Instagram Reels!
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-bronze-500 text-white text-[11px] font-bold whitespace-nowrap self-start sm:self-center">
              Ready to Post
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-cream-200/80 rounded-2xl max-w-4xl mx-auto border border-cream-300">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`py-2 px-3.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                activeFilter === tab.id
                  ? 'bg-sage-900 text-cream-50 shadow-md scale-[1.02]'
                  : 'text-charcoal-700 hover:text-sage-900 hover:bg-cream-100'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                activeFilter === tab.id ? 'bg-bronze-500 text-white' : 'bg-cream-300 text-charcoal-700'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 🎬 REELS LIBRARY VIEW */}
        {/* ========================================================================= */}
        {activeFilter !== 'launch' && (
          <div className="space-y-10">
            <div className="flex items-center justify-between border-b border-cream-200 pb-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-bronze-600">
                  {activeFilter === 'all' ? 'Complete Collection' : filterTabs.find(t => t.id === activeFilter)?.label}
                </span>
                <h2 className="font-serif text-2xl font-bold text-sage-900">
                  {displayedReels.length} Ready-to-Post {displayedReels.length === 1 ? 'Reel' : 'Reels'} & Video Clips
                </h2>
              </div>
              <span className="text-xs text-charcoal-500 hidden sm:inline">
                Formatted for Instagram Reels, TikTok & Stories
              </span>
            </div>

            <div className="space-y-12">
              {displayedReels.map((reel) => {
                const currentTab = activeCaptionTabs[reel.id] || 'reels';
                const isOverlayOn = showOverlays[reel.id] || false;

                let activeCaptionText = reel.reelsCaption;
                if (currentTab === 'feed') activeCaptionText = reel.feedCaption;
                if (currentTab === 'story') activeCaptionText = reel.storyScript;

                return (
                  <div
                    key={reel.id}
                    id={reel.id}
                    className="bg-white rounded-3xl border border-cream-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Top Bar */}
                    <div className="p-4 sm:p-5 bg-gradient-to-r from-sage-900 via-sage-800 to-sage-900 text-cream-50 flex flex-wrap items-center justify-between gap-3 border-b border-sage-700">
                      <div className="flex items-center gap-2.5">
                        <span className="px-3 py-1 rounded-full bg-bronze-500 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                          <Sparkles className="w-3 h-3 fill-white" />
                          {reel.badge}
                        </span>
                        <span className="text-xs text-sage-300 font-medium">
                          {reel.categoryLabel}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-sage-300">
                        <span>{reel.duration}</span>
                        <span>&bull;</span>
                        <span>{reel.fileSize}</span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left: Video Preview & Overlay */}
                      <div className="lg:col-span-5 space-y-4">
                        <div className="relative aspect-[9/16] max-h-[520px] w-full max-w-[320px] mx-auto rounded-2xl overflow-hidden bg-black shadow-2xl border-2 border-cream-300 group">
                          <video
                            src={reel.src}
                            poster={reel.poster}
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                          />

                          {/* Instagram-Style Text Overlay Preview */}
                          {isOverlayOn && (
                            <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none z-10 bg-black/25 transition-all">
                              <div className="bg-black/85 backdrop-blur-md text-white font-sans text-xs sm:text-sm font-bold text-center px-4 py-3 rounded-2xl border border-white/20 shadow-2xl max-w-[240px] leading-snug">
                                {reel.overlayText}
                              </div>
                            </div>
                          )}

                          {/* Floating Overlay Toggle on Video */}
                          <button
                            onClick={() => toggleOverlay(reel.id)}
                            className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 hover:bg-black/90 text-white text-[10px] font-semibold flex items-center gap-1 backdrop-blur-sm transition z-20 shadow"
                          >
                            <Eye className="w-3 h-3 text-bronze-400" />
                            {isOverlayOn ? 'Hide Hook' : 'Preview Hook'}
                          </button>
                        </div>

                        {/* Video Actions */}
                        <div className="w-full max-w-[320px] mx-auto space-y-2">
                          <a
                            href={reel.src}
                            download={reel.downloadName}
                            className="w-full py-3 px-4 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold flex items-center justify-center gap-2 transition shadow-md"
                          >
                            <Download className="w-4 h-4 text-bronze-300" />
                            Save Video to Phone ({reel.fileSize})
                          </a>
                          <button
                            onClick={() => toggleOverlay(reel.id)}
                            className="w-full py-2 px-3 rounded-xl bg-cream-100 hover:bg-cream-200 text-charcoal-700 text-[11px] font-medium transition flex items-center justify-center gap-1.5 border border-cream-300"
                          >
                            <Eye className="w-3.5 h-3.5 text-bronze-600" />
                            {isOverlayOn ? 'Hide On-Screen Reel Hook' : 'Preview On-Screen Reel Hook On Video'}
                          </button>
                        </div>
                      </div>

                      {/* Right: Reel Strategy, Paired Captions & Hashtags */}
                      <div className="lg:col-span-7 space-y-6">
                        <div>
                          <h3 className="font-serif text-2xl font-bold text-sage-900">
                            {reel.title}
                          </h3>
                        </div>

                        {/* On-Screen Reel Hook Box */}
                        <div className="p-4 rounded-2xl bg-cream-100/90 border border-cream-300 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-bronze-700 flex items-center gap-1.5">
                              <Smartphone className="w-3 h-3 text-bronze-600" />
                              On-Screen Reel Text Hook (Type This on the Video):
                            </span>
                            <button
                              onClick={() => handleCopy(reel.overlayText, `${reel.id}-hook`)}
                              className="text-[11px] font-semibold text-sage-800 hover:text-bronze-600 transition flex items-center gap-1"
                            >
                              {copiedId === `${reel.id}-hook` ? (
                                <span className="text-emerald-700 flex items-center gap-1 font-bold">
                                  <Check className="w-3 h-3" /> Copied Hook!
                                </span>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" /> Copy Hook
                                </>
                              )}
                            </button>
                          </div>
                          <p className="font-sans font-bold text-xs sm:text-sm text-sage-950 leading-snug">
                            &ldquo;{reel.overlayText}&rdquo;
                          </p>
                        </div>

                        {/* Audio & Timing Insights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div className="p-3 rounded-xl bg-white border border-cream-200 shadow-sm flex items-start gap-2.5">
                            <Music className="w-4 h-4 text-bronze-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-sage-900 block font-semibold">Recommended Sound:</strong>
                              <span className="text-charcoal-600 text-[11px]">{reel.audioSuggestion}</span>
                            </div>
                          </div>
                          <div className="p-3 rounded-xl bg-white border border-cream-200 shadow-sm flex items-start gap-2.5">
                            <Clock className="w-4 h-4 text-bronze-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-sage-900 block font-semibold">Optimal Posting Time:</strong>
                              <span className="text-charcoal-600 text-[11px]">{reel.bestPostingTime}</span>
                            </div>
                          </div>
                        </div>

                        {/* Caption Variation Tabs */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-sage-900 flex items-center gap-1.5">
                              <MessageSquare className="w-3.5 h-3.5 text-bronze-600" />
                              Paired Suggested Captions:
                            </span>

                            <button
                              onClick={() => handleCopy(activeCaptionText, `${reel.id}-${currentTab}`)}
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white text-xs font-semibold shadow transition"
                            >
                              {copiedId === `${reel.id}-${currentTab}` ? (
                                <>
                                  <Check className="w-3.5 h-3.5" /> Copied Caption!
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" /> Copy This Caption
                                </>
                              )}
                            </button>
                          </div>

                          {/* Caption Tab Switcher */}
                          <div className="flex items-center gap-1.5 p-1 bg-cream-200/80 rounded-xl border border-cream-300">
                            <button
                              onClick={() => setCaptionTab(reel.id, 'reels')}
                              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition ${
                                currentTab === 'reels'
                                  ? 'bg-white text-sage-900 shadow-sm'
                                  : 'text-charcoal-700 hover:text-sage-900'
                              }`}
                            >
                              Option 1: Reel / TikTok Hook
                            </button>
                            <button
                              onClick={() => setCaptionTab(reel.id, 'feed')}
                              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition ${
                                currentTab === 'feed'
                                  ? 'bg-white text-sage-900 shadow-sm'
                                  : 'text-charcoal-700 hover:text-sage-900'
                              }`}
                            >
                              Option 2: In-Depth Feed Post
                            </button>
                            <button
                              onClick={() => setCaptionTab(reel.id, 'story')}
                              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition ${
                                currentTab === 'story'
                                  ? 'bg-white text-sage-900 shadow-sm'
                                  : 'text-charcoal-700 hover:text-sage-900'
                              }`}
                            >
                              Option 3: Story Script & Polls
                            </button>
                          </div>

                          {/* Caption Text Box */}
                          <pre className="bg-cream-50 p-4 rounded-2xl text-xs text-charcoal-800 font-sans whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto border border-cream-300">
                            {activeCaptionText}
                          </pre>
                        </div>

                        {/* Tailored Hashtags Bar */}
                        <div className="bg-cream-100 rounded-2xl p-3.5 border border-cream-300 flex items-center justify-between gap-3">
                          <div className="text-xs text-charcoal-700 overflow-hidden">
                            <span className="font-bold text-sage-900 flex items-center gap-1 text-[11px] mb-0.5">
                              <Tag className="w-3 h-3 text-bronze-600" /> Curated Hashtag Bank:
                            </span>
                            <p className="font-mono text-[10px] text-sage-800 truncate">
                              {reel.hashtags}
                            </p>
                          </div>
                          <button
                            onClick={() => handleCopy(reel.hashtags, `${reel.id}-tags`)}
                            className="px-3 py-1.5 rounded-lg bg-cream-200 hover:bg-cream-300 text-charcoal-800 text-xs font-semibold transition flex-shrink-0"
                          >
                            {copiedId === `${reel.id}-tags` ? 'Copied Tags!' : 'Copy Tags'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 🚀 WEBSITE LAUNCH KIT TAB */}
        {/* ========================================================================= */}
        {activeFilter === 'launch' && (
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="border-b border-cream-200 pb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-bronze-600">
                  Brand & Digital Reassurance
                </span>
                <h2 className="font-serif text-2xl font-bold text-sage-900">
                  Website Announcement Photos (Mel, Zofia & Sanctuary)
                </h2>
                <p className="text-xs text-charcoal-600 mt-1">
                  Choose one photo or download all four to create an Instagram carousel.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {launchPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className="bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-sm"
                  >
                    <div className="relative aspect-[4/3] w-full bg-cream-100">
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
                        Save Photo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Launch Caption */}
            <div className="bg-white rounded-2xl p-6 border border-cream-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-sage-900">
                    Instagram & Facebook Launch Caption
                  </h3>
                  <p className="text-xs text-charcoal-500">
                    Warmly reassures clients that it is still Mel, Zofia and the team
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(mainLaunchCaption, 'launch-main')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white text-xs font-semibold shadow transition"
                >
                  {copiedId === 'launch-main' ? (
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
                {mainLaunchCaption}
              </pre>
            </div>

            {/* Short Story Version */}
            <div className="bg-white rounded-2xl p-6 border border-cream-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-sage-900">
                    Short Story Version
                  </h3>
                  <p className="text-xs text-charcoal-500">
                    Punchy text for Instagram Stories or quick Facebook status
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(shortLaunchCaption, 'launch-short')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold shadow transition"
                >
                  {copiedId === 'launch-short' ? (
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
                {shortLaunchCaption}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
