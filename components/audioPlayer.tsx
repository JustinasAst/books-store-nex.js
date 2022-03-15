import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineBackward, AiOutlineForward } from 'react-icons/ai';
import { ImPlay3 } from 'react-icons/im';
import { GiPauseButton } from 'react-icons/gi';

export const AudioPlayer = () => {
  const [isPlaying, setIsplaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer =
    React.useRef() as React.MutableRefObject<HTMLAudioElement>;

  const progressBar =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;
  console.log(progressBar.current);

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    let progressBarRange = Number(progressBar.current.max);
    progressBarRange = seconds;
  }, [audioPlayer?.current?.onloadeddata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMinutes}:${returnSeconds}`;
  };

  const playPause = () => {
    setIsplaying(!isPlaying);
    if (!isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
  };

  return (
    <div className="audio-player">
      <audio
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
        preload="metadata"
        ref={audioPlayer}
      ></audio>

      <button className="forward-backward-button">
        <AiOutlineBackward /> 30 sec
      </button>

      <button onClick={playPause}>
        {isPlaying ? <GiPauseButton /> : <ImPlay3 />}
      </button>

      <button className="forward-backward-button">
        <AiOutlineForward /> 30 sec
      </button>

      <div>{calculateTime(currentTime)}</div>
      <input
        className="progress-bar"
        type="range"
        defaultValue={0}
        ref={progressBar}
        onChange={changeRange}
      />
      <div>{calculateTime(duration)}</div>
    </div>
  );
};

export default AudioPlayer;