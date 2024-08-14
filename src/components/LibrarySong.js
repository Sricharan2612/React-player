import React from 'react';
const LibrarySong = ({ song, songs, setCurrentSong, audioRef, id, isPlaying, setSongs }) => {
    // Event Handlers
    const selectSongHandler = async (e) => {
        const selectedSong = song;
        await setCurrentSong(selectedSong);

        // Add Active State
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,

                };
            } else {
                return {
                    ...song,
                    active: false
                };
            }
        });
        // console.log(newSongs);
        setSongs(newSongs);

        // Checking song if its playing and continue playing next song
        if (isPlaying) {
            audioRef.current.play();
        }
    };


    return (
        <div onClick={selectSongHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;