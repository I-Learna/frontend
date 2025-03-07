"use client";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoPlayer = ({ url }: { url?: string }) => {
  return <ReactPlayer url={url} width="100%" height="100%" controls />;
};

export default VideoPlayer;
