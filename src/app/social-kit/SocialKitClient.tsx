'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Copy, Check, Download, ArrowLeft, Sparkles, Heart, Flame, Film, Share2, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function SocialKitClient() {
  const [activeTab, setActiveTab] = useState<'fireside' | 'launch' | 'library'>('fireside');
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [copiedShort, setCopiedShort] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const firesideMainCaption = `Step away from the cold and into the comforting warmth of The Fireside Ritual… 🍁🔥

As the crisp autumn air settles over Leicestershire, we’ve created a limited-edition warming escape designed to melt away deep muscular tension and restore seasonal radiance from head to toe.

✨ What your Fireside Ritual includes:
🍯 Step 1: Warming Cinnamon & Honey Back Exfoliation — A gentle spiced polish that smooths skin texture and awakens circulation.
🔥 Step 2: Heated Basalt Stone Massage & Bramley Botanicals — Smooth volcanic hot stones and warm botanical oils soothe tired shoulders, neck, and back.
🧖‍♀️ Step 3: Botanical Gua Sha Facial & Warm-Oil Scalp Therapy — Pressure-point scalp release and rose quartz contouring under cosy heated blankets.

🎁 Exclusive Take-Home Gift:
Book our 90-minute (£110) or 120-minute (£140) ritual and receive a complimentary luxury Bramley Gift Cracker (worth £35!), containing Bramley Raspberry Seed Facial Oil and a Rose Quartz Gua Sha so you can continue the ritual at home.

🍂 Available Options:
• 60 Minutes — £70
• 90 Minutes — £110 (Includes £35 Bramley Gift Cracker)
• 120 Minutes — £140 (Includes £35 Bramley Gift Cracker)

Appointments are strictly limited for the autumn & winter season. Tap the link in our bio or visit thebeautybarnleicester.co.uk to reserve your sanctuary today 🤍

With warmth,
Mel, Zofia & The Beauty Barn Team x

—
#TheBeautyBarnLeicester #TheBeautyBarn #LeicesterSpa #FiresideRitual #HotStoneMassageLeicester #LeicesterBeauty #Scraptoft #BramleyBotanicals #GuaShaFacial #AutumnSanctuary #Leicestershire`;

  const firesideReelCaption = `Save this for when the temperature drops below 10°C in Leicester… 🍁🍯🔥

The limited-edition Fireside Ritual is officially live at The Beauty Barn.
Warming cinnamon & honey back polish 🍯
Heated volcanic basalt stones 🔥
Nourishing warm Bramley oils 🌿
Rose quartz gua sha facial & scalp therapy 🧖‍♀️

PLUS a free £35 Bramley skincare cracker to take home on 90m & 120m bookings!

🔗 Tap the link in our bio to book your warming escape on Fresha!

#TheBeautyBarnLeicester #LeicesterSpa #FiresideRitual #HotStoneMassage #BramleyBotanicals #LeicesterBeauty`;

  const firesideStoryScript = `📱 3-SLIDE INSTAGRAM STORY SEQUENCE

SLIDE 1 (Video: Hot Stones Clip):
• Text: "When the autumn cold sets in and you just need this... 🔥"
• Poll Sticker: "Ready for hot stones season?" ➡️ [YES PLEASE! / DESPERATELY]

SLIDE 2 (Video: Cinnamon & Honey Polish Clip):
• Text: "Introducing THE FIRESIDE RITUAL 🍁 Warming cinnamon polish, heated volcanic stones, warm scalp therapy & rose quartz gua sha facial."

SLIDE 3 (Endcard / Booking):
• Text: "From £70 • Limited autumn & winter appointments. (90m & 120m include a FREE £35 Bramley cracker gift!)"
• Link Sticker: "BOOK ON FRESHA" 🔗 (Link to: thebeautybarnleicester.co.uk/rituals)`;

  const firesideHashtags = `#TheBeautyBarnLeicester #TheBeautyBarn #LeicesterSpa #FiresideRitual #HotStoneMassage #HotStonesLeicester #LeicestershireSpa #ScraptoftSpa #BramleyBotanicals #GuaShaFacial #AutumnSanctuary #LeicesterBeauty #WinterWellness #CouplesMassageLeicester #HolisticTherapy`;

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

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(type);
    if (type === 'main') {
      setCopiedCaption(true);
      setTimeout(() => setCopiedCaption(false), 2500);
    } else if (type === 'short') {
      setCopiedShort(true);
      setTimeout(() => setCopiedShort(false), 2500);
    }
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="min-h-screen bg-cream-50 text-charcoal-900 py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-sage-700 hover:text-bronze-600 transition font-medium mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to website
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze-500/10 text-bronze-700 text-xs font-semibold">
            <Share2 className="w-3.5 h-3.5" /> Social Media Marketing Hub
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-sage-900">
            Download Content Straight to Your Phone
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl mx-auto">
            Ready-made promotional videos, official trailer, and pre-written captions. Tap any <strong className="text-charcoal-900">&ldquo;Save&rdquo;</strong> button to download directly to your photos.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center p-1.5 bg-cream-200/80 rounded-2xl max-w-xl mx-auto border border-cream-300">
          <button
            onClick={() => setActiveTab('fireside')}
            className={`flex-1 py-2.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 ${
              activeTab === 'fireside'
                ? 'bg-sage-900 text-cream-50 shadow-md'
                : 'text-charcoal-700 hover:text-sage-900'
            }`}
          >
            <Flame className="w-4 h-4 text-amber-400" />
            Fireside Campaign
          </button>
          <button
            onClick={() => setActiveTab('launch')}
            className={`flex-1 py-2.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 ${
              activeTab === 'launch'
                ? 'bg-sage-900 text-cream-50 shadow-md'
                : 'text-charcoal-700 hover:text-sage-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-bronze-400" />
            Website Launch
          </button>
          <button
            onClick={() => setActiveTab('library')}
            className={`flex-1 py-2.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 ${
              activeTab === 'library'
                ? 'bg-sage-900 text-cream-50 shadow-md'
                : 'text-charcoal-700 hover:text-sage-900'
            }`}
          >
            <Film className="w-4 h-4 text-sage-400" />
            All Clips
          </button>
        </div>

        {/* TAB 1: FIRESIDE RITUAL CAMPAIGN */}
        {activeTab === 'fireside' && (
          <div className="space-y-10">
            {/* Hero Trailer */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-cream-200 pb-5">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 text-[11px] font-bold uppercase tracking-wider">
                    <Flame className="w-3.5 h-3.5 text-amber-600" /> Official Cinematic Trailer
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-900">
                    The Fireside Ritual Experience Trailer
                  </h2>
                  <p className="text-xs text-charcoal-600">
                    35.5s • 1080x1920 Full HD Vertical • Integrated Spa Soundtrack & Text Badges
                  </p>
                </div>
                <a
                  href="/videos/fireside-ritual-trailer.mp4"
                  download="The-Beauty-Barn-Fireside-Ritual-Trailer.mp4"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs sm:text-sm shadow-md transition whitespace-nowrap"
                >
                  <Download className="w-4 h-4" /> Save Trailer (16.6 MB)
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-6 lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-[280px] aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-2xl border-2 border-sage-800 relative">
                    <video
                      src="/videos/fireside-ritual-trailer.mp4"
                      poster="/videos/fireside-ritual-trailer-poster.jpg"
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-6 lg:col-span-7 space-y-4">
                  <h3 className="font-serif text-base font-bold text-sage-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-bronze-500" />
                    Complete Journey Flow Shown in Video:
                  </h3>
                  <div className="space-y-2.5 text-xs text-charcoal-700">
                    <div className="p-2.5 rounded-xl bg-cream-100 border border-cream-200">
                      <strong className="text-sage-900 block font-semibold">🕯️ 0:00 - 0:04 | The Hook</strong>
                      Candlelit luxury ambience: &ldquo;Step away from the cold... Introducing The Fireside Ritual&rdquo;
                    </div>
                    <div className="p-2.5 rounded-xl bg-cream-100 border border-cream-200">
                      <strong className="text-sage-900 block font-semibold">🍯 0:04 - 0:11 | Step 1: Polish & Smooth</strong>
                      Wooden spatula scooping warm cinnamon & honey scrub + full-back smoothing polish
                    </div>
                    <div className="p-2.5 rounded-xl bg-cream-100 border border-cream-200">
                      <strong className="text-sage-900 block font-semibold">🔥 0:11 - 0:19 | Step 2: Heated Basalt Stones</strong>
                      Gliding volcanic basalt stones & warm Bramley botanical oils melting tension
                    </div>
                    <div className="p-2.5 rounded-xl bg-cream-100 border border-cream-200">
                      <strong className="text-sage-900 block font-semibold">🧖‍♀️ 0:19 - 0:27 | Step 3: Gua Sha & Scalp Therapy</strong>
                      Rose quartz facial contouring & soothing warm-oil scalp & décolleté release
                    </div>
                    <div className="p-2.5 rounded-xl bg-cream-100 border border-cream-200">
                      <strong className="text-sage-900 block font-semibold">🎁 0:27 - 0:35 | Free Gift & Call to Action</strong>
                      Free £35 Bramley cracker gift on 90m/120m + pricing from £70 & Fresha booking
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Short Promotional Clips */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-bronze-600 block">
                  Bite-Sized Social Content
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-900">
                  3 Short Promotional Clips for Reels & Stories
                </h2>
                <p className="text-xs text-charcoal-600">
                  Short, high-hook video cuts (8 - 10s) formatted for Instagram Reels, TikTok, and Stories.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Promo 1 */}
                <div className="bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-sm flex flex-col">
                  <div className="p-3 bg-sage-900 text-cream-50 flex items-center justify-between text-xs">
                    <span className="font-bold font-serif text-amber-300">1. Cinnamon Polish</span>
                    <span className="text-[11px] text-sage-300">8.0s • 4.9 MB</span>
                  </div>
                  <div className="relative aspect-[9/16] bg-black">
                    <video
                      src="/videos/fireside-promo-cinnamon-honey.mp4"
                      poster="/videos/fireside-promo-cinnamon-poster.jpg"
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-bronze-600 block">Sensory ASMR Hook</span>
                      <h4 className="font-serif text-sm font-bold text-sage-900">Warming Cinnamon Polish</h4>
                      <p className="text-[11px] text-charcoal-500 mt-1">
                        Scoop & polish back smoothing. Perfect for seasonal glow-up reels.
                      </p>
                    </div>
                    <a
                      href="/videos/fireside-promo-cinnamon-honey.mp4"
                      download="Fireside-Promo-Cinnamon-Honey.mp4"
                      className="w-full py-2 px-3 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                    >
                      <Download className="w-3.5 h-3.5 text-bronze-300" /> Save to Phone
                    </a>
                  </div>
                </div>

                {/* Promo 2 */}
                <div className="bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-sm flex flex-col">
                  <div className="p-3 bg-sage-900 text-cream-50 flex items-center justify-between text-xs">
                    <span className="font-bold font-serif text-amber-300">2. Hot Stones Therapy</span>
                    <span className="text-[11px] text-sage-300">8.5s • 4.3 MB</span>
                  </div>
                  <div className="relative aspect-[9/16] bg-black">
                    <video
                      src="/videos/fireside-promo-hot-stones.mp4"
                      poster="/videos/fireside-promo-stones-poster.jpg"
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-bronze-600 block">Cold Weather Sanctuary</span>
                      <h4 className="font-serif text-sm font-bold text-sage-900">Hot Basalt Stone Melting</h4>
                      <p className="text-[11px] text-charcoal-500 mt-1">
                        Volcanic hot stones gliding over shoulders. Ideal for freezing weather posts.
                      </p>
                    </div>
                    <a
                      href="/videos/fireside-promo-hot-stones.mp4"
                      download="Fireside-Promo-Hot-Stones.mp4"
                      className="w-full py-2 px-3 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                    >
                      <Download className="w-3.5 h-3.5 text-bronze-300" /> Save to Phone
                    </a>
                  </div>
                </div>

                {/* Promo 3 */}
                <div className="bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-sm flex flex-col">
                  <div className="p-3 bg-sage-900 text-cream-50 flex items-center justify-between text-xs">
                    <span className="font-bold font-serif text-amber-300">3. Full 3-Step Journey</span>
                    <span className="text-[11px] text-sage-300">10.5s • 6.2 MB</span>
                  </div>
                  <div className="relative aspect-[9/16] bg-black">
                    <video
                      src="/videos/fireside-promo-full-experience.mp4"
                      poster="/videos/fireside-promo-full-poster.jpg"
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-bronze-600 block">Step-by-Step Reel</span>
                      <h4 className="font-serif text-sm font-bold text-sage-900">All 3 Ritual Steps + Gift</h4>
                      <p className="text-[11px] text-charcoal-500 mt-1">
                        Fast-paced sequence showing polish, hot stones, gua sha facial & scalp therapy.
                      </p>
                    </div>
                    <a
                      href="/videos/fireside-promo-full-experience.mp4"
                      download="Fireside-Promo-Full-Experience.mp4"
                      className="w-full py-2 px-3 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                    >
                      <Download className="w-3.5 h-3.5 text-bronze-300" /> Save to Phone
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Captions Section */}
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-bronze-600 block">
                  Done-For-You Social Copy
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-900">
                  Ready-to-Paste Captions & Story Scripts
                </h2>
                <p className="text-xs text-charcoal-600">
                  Tap any &ldquo;Copy&rdquo; button below to copy the full caption text directly to your clipboard.
                </p>
              </div>

              {/* Caption 1 */}
              <div className="bg-white rounded-2xl p-5 border border-cream-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-bronze-600 uppercase tracking-wider">
                      <Instagram className="w-3.5 h-3.5" /> Option 1: Main Launch Post (Instagram & Facebook)
                    </div>
                    <h3 className="font-serif text-base font-bold text-sage-900">Full Sensory Story & Treatment Details</h3>
                  </div>
                  <button
                    onClick={() => handleCopy(firesideMainCaption, 'fireside-main')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white text-xs font-semibold shadow transition"
                  >
                    {copiedId === 'fireside-main' ? (
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
                  {firesideMainCaption}
                </pre>
              </div>

              {/* Caption 2 */}
              <div className="bg-white rounded-2xl p-5 border border-cream-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-bronze-600 uppercase tracking-wider">
                      <Film className="w-3.5 h-3.5" /> Option 2: Reels & TikTok Punchy Hook
                    </div>
                    <h3 className="font-serif text-base font-bold text-sage-900">Viral Short Hook for Quick Scrolling</h3>
                  </div>
                  <button
                    onClick={() => handleCopy(firesideReelCaption, 'fireside-reel')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold shadow transition"
                  >
                    {copiedId === 'fireside-reel' ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy Reel Text
                      </>
                    )}
                  </button>
                </div>
                <pre className="bg-cream-50 p-4 rounded-xl text-xs text-charcoal-800 font-sans whitespace-pre-wrap leading-relaxed border border-cream-200">
                  {firesideReelCaption}
                </pre>
              </div>

              {/* Caption 3 */}
              <div className="bg-white rounded-2xl p-5 border border-cream-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-bronze-600 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" /> Option 3: Instagram Stories Sequence (With Polls)
                    </div>
                    <h3 className="font-serif text-base font-bold text-sage-900">Interactive 3-Slide Story Strategy</h3>
                  </div>
                  <button
                    onClick={() => handleCopy(firesideStoryScript, 'fireside-story')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold shadow transition"
                  >
                    {copiedId === 'fireside-story' ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy Story Plan
                      </>
                    )}
                  </button>
                </div>
                <pre className="bg-cream-50 p-4 rounded-xl text-xs text-charcoal-800 font-sans whitespace-pre-wrap leading-relaxed border border-cream-200">
                  {firesideStoryScript}
                </pre>
              </div>

              {/* Hashtags */}
              <div className="bg-cream-100 rounded-2xl p-4 border border-cream-300 flex items-center justify-between gap-4">
                <div className="text-xs text-charcoal-600">
                  <strong className="text-sage-900 block font-semibold mb-0.5">Local & Ritual Hashtag Bank:</strong>
                  <span className="font-mono text-[11px] text-sage-800">{firesideHashtags}</span>
                </div>
                <button
                  onClick={() => {
                    handleCopy(firesideHashtags, 'fireside-tags');
                  }}
                  className="px-3 py-1.5 rounded-lg bg-cream-200 hover:bg-cream-300 text-charcoal-800 text-xs font-semibold transition flex-shrink-0"
                >
                  {copiedId === 'fireside-tags' ? 'Copied!' : 'Copy Tags'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: WEBSITE LAUNCH KIT */}
        {activeTab === 'launch' && (
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-sage-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-bronze-500" />
                Announcement Photos (Choose one or use all for a carousel)
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {photos.map((photo) => (
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
                        Save
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-cream-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-base font-bold text-sage-900">Instagram & Facebook Launch Caption</h2>
                  <p className="text-xs text-charcoal-500">Reassures clients that it is still Mel, Zofia and the team</p>
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

            <div className="bg-white rounded-2xl p-5 border border-cream-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-base font-bold text-sage-900">Short Story Version</h2>
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
        )}

        {/* TAB 3: TREATMENT CLIPS LIBRARY */}
        {activeTab === 'library' && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-xs font-bold uppercase tracking-wider text-sage-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-bronze-500" />
                Treatment Video Clips (Save for Instagram Reels & Stories)
              </h2>
              <p className="text-xs text-charcoal-600">
                Real treatment footage recorded in the barn. Tap Save to download any clip straight to your phone.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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
                      <h3 className="font-serif text-xs font-bold text-sage-900">{v.title}</h3>
                      <p className="text-[11px] text-charcoal-500">{v.size}</p>
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
        )}
      </div>
    </div>
  );
}
