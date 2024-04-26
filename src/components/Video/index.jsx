import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import VideoSrc from "../../assets/UP.mp4";
import "./index.css";

function Video({ showSkipButton }) {
  const videoRef = useRef(null);
  const navigate = useNavigate(); // Obtenha o método navigate

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      navigate("/studio-sant/principal"); // Redireciona após o vídeo terminar
    };

    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [navigate]);

  // Opção para pular o vídeo
  const skipVideo = () => {
    navigate("/studio-sant/principal"); // Redireciona ao clicar no botão "Pular Vídeo"
  };

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
          onClick={skipVideo}
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
