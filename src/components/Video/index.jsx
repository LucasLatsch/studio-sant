import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import VideoSrc from "../../assets/UP.mp4";
import "./index.css";

function Video({ onTimeout, showSkipButton }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleVideoEnd = () => onTimeout();
      video.addEventListener("ended", handleVideoEnd);
      return () => video.removeEventListener("ended", handleVideoEnd);
    }
  }, [onTimeout]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <video
        ref={videoRef}
        controls
        autoPlay
        muted
        style={{ width: "100%", height: "100%" }}
      >
        <source src={VideoSrc} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
      {showSkipButton && (
        <button
          onClick={onTimeout}
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
          }}
        >
          Pular Vídeo
        </button>
      )}
    </motion.div>
  );
}

export default Video;
