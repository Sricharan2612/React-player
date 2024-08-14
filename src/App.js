import React, { useState, useRef } from "react";
// Adding Styles
import './styles/app.scss';
// Adding Components
import Song from './components/Song';
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";

// Import Data
import data from './data';

function App() {
  // States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0
  });

  const [libraryStatus, setLibraryStatus] = useState(false);

  // Ref
  const audioRef = useRef(null);

  // Event Handlers
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({ ...songInfo, currentTime: current, duration, animationPercentage: animation });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) {
      setTimeout(() => {
        audioRef.current.play();
      }, 100);
    }
  };

  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />

      <Player
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        timeUpdateHandler={timeUpdateHandler}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
      />

      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />

      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        onEnded={songEndHandler}
        ref={audioRef}
        src={currentSong.audio}>
      </audio>
    </div>
  );
}

export default App;
