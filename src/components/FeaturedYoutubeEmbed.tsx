"use client";

import { useEffect, useState } from "react";
import { pickRandomYoutubeVideoIdForEmbed } from "@/site-config";

type FeaturedYoutubeEmbedProps = {
  videos: readonly string[];
  title: string;
};

export default function FeaturedYoutubeEmbed({
  videos,
  title,
}: FeaturedYoutubeEmbedProps) {
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    setVideoId(pickRandomYoutubeVideoIdForEmbed(videos));
  }, [videos]);

  if (!videoId) {
    return (
      <div
        className="relative mx-auto mt-3 aspect-video w-full max-w-3xl overflow-hidden rounded-xl border border-[var(--border)] bg-black"
        aria-hidden
      />
    );
  }

  return (
    <div className="relative mx-auto mt-3 aspect-video w-full max-w-3xl overflow-hidden rounded-xl border border-[var(--border)] bg-black">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
