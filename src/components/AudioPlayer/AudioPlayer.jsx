import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PauseIcon, PlayIcon, PrevIcon, NextIcon } from '@/components/Icons';

const AudioPlayer = ({ albums }) => {
  const [currentAlbums, setcurrentAlbums] = useState(albums);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioSrc = currentAlbums?.[trackIndex]?.ayah?.audio || null;
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    audioRef.current.play();
    startTimer();
  };

  const handlePause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
    clearInterval(intervalRef.current);
  };

  const handlePrev = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(albums.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };
  const handleNext = () => {
    if (trackIndex < albums.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
      handlePause();
    }
  };

  useEffect(() => {
    setcurrentAlbums(albums);
    return () => {
      audioRef.current.pause();
      setIsPlaying(false);
      setTrackIndex(0);
      clearInterval(intervalRef.current);
    };
  }, [albums]);

  useEffect(() => {
    audioRef.current.pause();
    const audioSource = currentAlbums?.[trackIndex]?.ayah?.audio || null;
    audioRef.current = new Audio(audioSource);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [trackIndex]);
  const currentAlbum = currentAlbums?.[trackIndex] || null;
  return (
    <div className="w-full block p-4">
      <div className="bg-white shadow-xl p-4 flex flex-nowrap justify-between align-middle items-center">
        <div className="flex w-1/2" />
        <div className="flex w-1/2 align-middle items-center flex-col">
          <div className="block text-left w-full p-2">
            <h1 className="text-primary-500 font-bold flex justify-between pb-2 mb-2 border-b border-primary-100">
              <span className="inline-block">{currentAlbum?.englishName}</span>
              <span className="inline-block font-arabic">
                {currentAlbum?.name}
              </span>
            </h1>
            <h1 className="text-secondary-500 font-bold flex justify-center py-2 border-b border-primary-100 font-arabic text-right leading-6">
              {currentAlbum?.ayah?.text}
            </h1>
          </div>
          <div className="flex w-full justify-center align-middle items-center">
            <button
              className="appearance-none bg-none shadow-none mx-1"
              type="button"
              onClick={handlePrev}
            >
              <PrevIcon />
            </button>
            {isPlaying ? (
              <button
                className="appearance-none bg-none shadow-none mx-1"
                type="button"
                onClick={handlePause}
              >
                <PauseIcon />
              </button>
            ) : (
              <button
                className="appearance-none bg-none shadow-none mx-1"
                type="button"
                onClick={handlePlay}
              >
                <PlayIcon />
              </button>
            )}
            <button
              className="appearance-none bg-none shadow-none mx-1"
              type="button"
              onClick={handleNext}
            >
              <NextIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

AudioPlayer.propTypes = {
  albums: PropTypes.array,
};

export default AudioPlayer;
