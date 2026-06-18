import { useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import dashboardVideo from "../../assets/videos/video_comprimido.mp4";

export default function HeroVideo() {
  const videoRef = useRef(null);

  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const newMuted = !muted;
    video.muted = newMuted;
    setMuted(newMuted);
  };

  const handleVolume = (e) => {
    const value = Number(e.target.value);
    const video = videoRef.current;
    if (!video) return;

    setVolume(value);
    video.volume = value;

    if (value === 0) {
      video.muted = true;
      setMuted(true);
    } else {
      video.muted = false;
      setMuted(false);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    setDuration(video.duration);
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const value = Number(e.target.value);
    video.currentTime = (value / 100) * video.duration;
    setProgress(value);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative w-[600px] h-[500px] overflow-hidden rounded-[32px] group">
      <video
        ref={videoRef}
        src={dashboardVideo}
        autoPlay
        loop
        muted={muted}
        playsInline
        preload="auto"
        onPlay={() => setPlaying(true)}     
        onPause={() => setPlaying(false)}  
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        className="w-full h-full object-cover"
        style={{ objectPosition: "center 30%" }}
      />

      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="w-full cursor-pointer mb-3"
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="p-2 rounded-full hover:bg-white/10 transition"
            >
              {playing ? (
                <Pause size={20} className="text-white" /> 
              ) : (
                <Play size={20} className="text-white" />   
              )}
            </button>

            <button
              onClick={toggleMute}
              className="p-2 rounded-full hover:bg-white/10 transition"
            >
              {muted ? (
                <VolumeX size={20} className="text-white" /> 
              ) : (
                <Volume2 size={20} className="text-white" /> 
              )}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolume}
              className="w-24 cursor-pointer"
            />
          </div>

          <span className="text-white text-sm font-medium">
            {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  );
}