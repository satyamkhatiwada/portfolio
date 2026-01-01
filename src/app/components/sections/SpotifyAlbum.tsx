import React from "react";

const SpotifyAlbum: React.FC = () => {
  return (
<div className="col-span-2 row-span-1 bg-white-500/20 h-[152px]">
      <iframe
        className="w-full h-full rounded-xl"
        src="https://open.spotify.com/embed/artist/4gzpq5DPGxSnKTe4SA8HAU?utm_source=generator" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
};

export default SpotifyAlbum;