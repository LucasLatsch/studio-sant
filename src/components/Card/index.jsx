import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Logo from "../Logo";

function Card() {
  const navigate = useNavigate(); // Obtenha o método navigate

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Quando o tempo acabar, redirecione para a rota de vídeo
      navigate("/studio-sant/video");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <>
      <AnimatePresence>
        <div className="content">
          <motion.div
            className="content-container"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.5,
              type: "tween",
            }}
          >
            <Logo />
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
}

export default Card;
