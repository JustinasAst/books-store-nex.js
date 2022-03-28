import React, { useState, useRef, useEffect } from 'react';
import { GrForwardTen, GrBackTen } from 'react-icons/gr';
import { BsSkipBackwardFill } from 'react-icons/bs';
import { BsFillSkipForwardFill } from 'react-icons/bs';
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

  // minejai kad geriau naudoti du if negu naudoti else. Siuo atveju buciau naudojes ternary operator.
  const playPause = () => {
    setIsplaying(!isPlaying);
    if (!isPlaying) {
      audioPlayer.current.play();
    }
    if (isPlaying) {
      audioPlayer.current.pause();
    }
  };

  return (
    <div className="audio-player">
      <audio
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
        preload="metadata"
        ref={audioPlayer}
      ></audio>

      <input
        className="progress-bar"
        type="range"
        defaultValue={0}
        ref={progressBar}
      />

      <div className="time-range">
        <div>{calculateTime(currentTime)}</div>
        <div>{calculateTime(duration)}</div>
      </div>

      <div className="player-button-box">
        <button type="button" className="forward-backward-button">
          <BsSkipBackwardFill />
        </button>

        <button type="button" className="forward-backward-button">
          <GrBackTen />
        </button>

        <button type="button" className="pause-play-button" onClick={playPause}>
          {isPlaying ? <GiPauseButton /> : <ImPlay3 />}
        </button>

        <button type="button" className="forward-backward-button">
          <GrForwardTen />
        </button>

        <button type="button" className="forward-backward-button">
          <BsFillSkipForwardFill />
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
