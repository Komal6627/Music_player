import React from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';

const PlayerControls = ({ isPlaying, onPlayPause, onNext, onPrevious, currentSong }) => (
  <div className="fixed bottom-4 right-4 bg-red-950 text-white p-4 w-60 h-72 ml-5 flex flex-col items-center rounded-lg shadow-lg">
    {/* Display current song image and title */}
    {currentSong && (
      <div className="flex flex-col items-center mb-4">
        <img
          src={currentSong.artwork}
          alt={currentSong.title}
          className="w-full h-20 rounded-md mb-2"
        />
        <div className="text-center">
          <h3 className="text-sm font-bold">{currentSong.title}</h3>
          <p className="text-xs text-gray-400">{currentSong.artist}</p>
        </div>
      </div>
    )}
    {/* Buttons under the image */}
    <div className="flex space-x-4">
      <button onClick={onPrevious} className="p-2">
        <FaBackward size={24} />
      </button>
      <button
        onClick={onPlayPause}
        className="p-4 bg-green-500 rounded-full"
      >
        {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
      </button>
      <button onClick={onNext} className="p-2">
        <FaForward size={24} />
      </button>
    </div>
  </div>
);

export default PlayerControls;
