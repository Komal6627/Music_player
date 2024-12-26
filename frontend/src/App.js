import React, { useState, useRef, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Sidebar from "./components/Sidebar";
import SongList from "./components/SongList";
import PlayerControls from "./components/PlayerControls";
import NowPlaying from "./components/NowPlaying";
import Navbar from "./components/Navbar";
import { Howl } from "howler";

function App() {
  const [songList, setSongList] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef(null);

  // Fetch songs on component mount
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch("http://localhost:5000/songs");
        if (!response.ok) throw new Error("Failed to fetch songs");
        const data = await response.json();
        setSongList(data);
        setCurrentSong(data[0]);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  const playSong = (song) => {
    if (soundRef.current) {
      soundRef.current.stop();
    }

    const sound = new Howl({
      src: [song.url],
      html5: true,
    });

    sound.play();
    soundRef.current = sound;
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (soundRef.current) {
      isPlaying ? soundRef.current.pause() : soundRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    const currentIndex = songList.findIndex((song) => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songList.length;
    playSong(songList[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = songList.findIndex((song) => song.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songList.length) % songList.length;
    playSong(songList[prevIndex]);
  };



  // Handle drag and drop
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    
    const reorderedSongs = Array.from(songList);
    console.log(songList);

    const [movedSong] = reorderedSongs.splice(result.source.index, 1);
    reorderedSongs.splice(result.destination.index, 0, movedSong);
    setSongList(reorderedSongs);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <Navbar />
        {currentSong && <NowPlaying currentSong={currentSong} />}
        <DragDropContext onDragEnd={handleDragEnd} >
          <SongList songs={songList} playSong={playSong} />
        </DragDropContext>
      </div>
      <PlayerControls
        isPlaying={isPlaying}
        onPlayPause={togglePlayPause}
        onNext={handleNext}
        onPrevious={handlePrevious}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
