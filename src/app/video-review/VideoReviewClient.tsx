'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Play, Download, Check, Sparkles, ArrowLeft, Video, Copy } from 'lucide-react';

interface VideoItem {
  id: string;
  name: string;
  size: string;
  src: string;
}

export default function VideoReviewClient() {
  const [selectedNotes, setSelectedNotes] = useState<Record<string, string>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const videos: VideoItem[] = [
    { id: '1', name: '50069.mp4', size: '7.8 MB', src: '/review-videos/50069.mp4' },
    { id: '2', name: '50070.mp4', size: '1.5 MB', src: '/review-videos/50070.mp4' },
    { id: '3', name: '50082.mp4', size: '4.9 MB', src: '/review-videos/50082.mp4' },
    { id: '4', name: '50084.mp4', size: '1.4 MB', src: '/review-videos/50084.mp4' },
    { id: '5', name: '50105.mp4', size: '0.9 MB', src: '/review-videos/50105.mp4' },
    { id: '6', name: '50108.mp4', size: '1.0 MB', src: '/review-videos/50108.mp4' },
    { id: '7', name: '50109.mp4', size: '9.9 MB', src: '/review-videos/50109.mp4' },
    { id: '8', name: '50112.mp4', size: '0.6 MB', src: '/review-videos/50112.mp4' },
    { id: '9', name: '50113.mp4', size: '5.4 MB', src: '/review-videos/50113.mp4' },
    { id: '10', name: '50118.mp4', size: '0.6 MB', src: '/review-videos/50118.mp4' },
    { id: '11', name: '50121.mp4', size: '4.7 MB', src: '/review-videos/50121.mp4' },
    { id: '12', name: '50125.mp4', size: '4.1 MB', src: '/review-videos/50125.mp4' },
    { id: '13', name: '50127.mp4', size: '7.2 MB', src: '/review-videos/50127.mp4' },
    { id: '14', name: '50131.mp4', size: '1.4 MB', src: '/review-videos/50131.mp4' },
    { id: '15', name: '50132.mp4', size: '2.9 MB', src: '/review-videos/50132.mp4' },
    { id: '16', name: '50133.mp4', size: '1.9 MB', src: '/review-videos/50133.mp4' },
    { id: '17', name: '50134.mp4', size: '2.2 MB', src: '/review-videos/50134.mp4' },
  ];

  const handleCopy = (filename: string) => {
    navigator.clipboard.writeText(filename);
    setCopiedId(filename);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleTagChange = (filename: string, tag: string) => {
    setSelectedNotes((prev) => ({
      ...prev,
      [filename]: tag,
    }));
  };

  const tagOptions = [
    'Lash Lift',
    'Hot Stones Massage',
    'Facial Gua Sha',
    'Body Massage',
    'Facial Ritual',
    'Cabin / Barn Detail',
    'Other',
  ];

  return (
    <div className="min-h-screen bg-cream-50 text-charcoal-900 py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-sage-700 hover:text-bronze-600 transition font-medium mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to website
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze-500/10 text-bronze-600 text-xs font-semibold">
            <Video className="w-3.5 h-3.5" /> Private Screening Room
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-sage-900">
            Treatment Video Review (17 Clips)
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl mx-auto">
            Press play on each video below to preview it on your screen. You can tag what each video shows (Lash Lift, Hot Stones, Facial Gua Sha, etc.) or just let me know the file numbers!
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((vid, idx) => (
            <div
              key={vid.id}
              className="bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-sm flex flex-col"
            >
              {/* Card Header */}
              <div className="p-3.5 bg-sage-900 text-cream-50 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-mono">
                  <span className="w-5 h-5 rounded-full bg-bronze-500 text-white flex items-center justify-center text-[11px] font-bold">
                    {idx + 1}
                  </span>
                  <span className="font-semibold tracking-wide">{vid.name}</span>
                </div>
                <span className="text-sage-300 text-[11px]">{vid.size}</span>
              </div>

              {/* Video Player */}
              <div className="relative aspect-[9/16] sm:aspect-[4/5] bg-black flex items-center justify-center">
                <video
                  src={vid.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Tagging / Actions */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between bg-white border-t border-cream-200">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-sage-800 uppercase tracking-wider block">
                    What is this clip?
                  </label>
                  <select
                    value={selectedNotes[vid.name] || ''}
                    onChange={(e) => handleTagChange(vid.name, e.target.value)}
                    className="w-full text-xs p-2 rounded-xl border border-cream-300 bg-cream-50 focus:outline-none focus:ring-2 focus:ring-bronze-500 font-medium"
                  >
                    <option value="">Select Treatment...</option>
                    {tagOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-cream-100">
                  <button
                    onClick={() => handleCopy(vid.name)}
                    className="flex-1 py-1.5 px-2.5 rounded-lg border border-cream-300 hover:bg-cream-100 transition text-[11px] font-medium flex items-center justify-center gap-1.5 text-charcoal-700"
                  >
                    {copiedId === vid.name ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-gray-400" /> Copy Name
                      </>
                    )}
                  </button>
                  <a
                    href={vid.src}
                    download={vid.name}
                    className="py-1.5 px-2.5 rounded-lg bg-sage-800 hover:bg-sage-900 text-cream-50 transition text-[11px] font-medium flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3 h-3 text-bronze-300" /> Save
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Summary Note */}
        {Object.keys(selectedNotes).length > 0 && (
          <div className="sticky bottom-6 bg-sage-900 text-cream-50 p-4 rounded-2xl shadow-2xl border border-bronze-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs space-y-1 text-center sm:text-left">
              <span className="font-bold text-bronze-400 block sm:inline mr-2">
                Tagged {Object.keys(selectedNotes).length} of 17:
              </span>
              <span className="text-cream-200">
                {Object.entries(selectedNotes)
                  .map(([name, tag]) => `${name}: ${tag}`)
                  .join(' | ')}
              </span>
            </div>
            <button
              onClick={() => {
                const summary = Object.entries(selectedNotes)
                  .map(([name, tag]) => `${name} = ${tag}`)
                  .join('\n');
                navigator.clipboard.writeText(summary);
                alert('Copied tagged list to clipboard! You can paste it into the chat.');
              }}
              className="px-4 py-2 bg-bronze-500 hover:bg-bronze-600 text-white text-xs font-semibold rounded-xl shadow whitespace-nowrap"
            >
              Copy Tagged List
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
