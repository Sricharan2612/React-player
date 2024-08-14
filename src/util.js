// Checking song if the audio playing and continue playing if skipped to next or previous song
export const playAudio = (isPlaying, audioRef) => {
    if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise.then((audio) => {
                audioRef.current.play();
            });
        }
    }
};