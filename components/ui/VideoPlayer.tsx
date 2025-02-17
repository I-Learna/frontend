"use client";
import { useRef, useState } from "react";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  // Toggle Play/Pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Update progress bar
  const updateProgress = () => {
    if (videoRef.current && progressRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      progressRef.current.value = progress.toString();
    }
  };

  // Seek video
  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newTime =
        (parseFloat(event.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  // Adjust Volume
  const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newVolume = parseFloat(event.target.value);
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  // Fullscreen Toggle
  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto bg-black rounded-lg overflow-hidden">
      {/* Video Player */}
      <video
        ref={videoRef}
        className="w-full rounded-lg"
        onTimeUpdate={updateProgress}
      >
        <source
          src="https://youtu.be/D0UnqGm_miA?si=217jVQzaZGCgAR5T"
          type="video/mp4"
        />
      </video>

      {/* Custom Controls */}
      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between p-3 bg-black/70 text-white rounded-lg">
        {/* Play/Pause Button */}
        <button onClick={togglePlay} className="p-2">
          {isPlaying ? "⏸️" : "▶️"}
        </button>

        {/* Progress Bar */}
        <input
          ref={progressRef}
          type="range"
          min="0"
          max="100"
          step="0.1"
          className="w-1/2 mx-2"
          onChange={handleSeek}
        />

        {/* Volume Control */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          className="w-16"
          onChange={handleVolume}
        />

        {/* Fullscreen Button */}
        <button onClick={toggleFullScreen} className="p-2">
          ⛶
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
