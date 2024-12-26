import React from 'react';

const NowPlaying = ({ currentSong }) => {
  if (!currentSong) {
    return <p className="text-center">No song is currently playing.</p>;
  }

  return (
    <div className="text-center">
      <img src={currentSong.artwork} alt={currentSong.title} className="w-3/4  h-60 object-cover" />
      <h2 className="mt-2 mr-60 text-white font-bold">{currentSong.title}</h2>
      <p className="text-sm mr-60 text-gray-400">{currentSong.artist}</p>
    </div>
  );
};

export default NowPlaying;
