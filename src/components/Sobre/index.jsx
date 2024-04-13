import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { motion } from "framer-motion";
import SobreImg from "../../assets/SOBRE.jpg";
import Teste from "../../assets/fundo-studio-jsant.jpg";
import Logo from "../Logo";
import { IoClose } from "react-icons/io5";
import { Row, Col } from "react-bootstrap";
import YouTube from "react-youtube";

export default function Sobre({ setSelectedItem }) {
  const [expanded, setExpanded] = useState(false);
  const expandedContentRef = useRef(null);
  useEffect(() => {
    if (expanded && expandedContentRef.current) {
      expandedContentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [expanded]);

  const handleClick = () => {
    setSelectedItem(null);
    setExpanded(false);
  };

  return (
    <>
      <motion.div
        className="content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundImage: `url(${SobreImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <div>
          <Row style={{ width: "98vw" }}>
            <Col>
              <Logo />
            </Col>
            <Col style={{ display: "flex", justifyContent: "end" }}>
              <IoClose
                style={{
                  fontSize: "25px",
                  cursor: "pointer",
                  position: "fixed",
                }}
                onClick={() => handleClick()}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p
                style={{
                  display: "flex",
                  textAlign: "justify",
                  width: "370px",
                  fontSize: "16px",
                  marginTop: "6.5rem",
                  marginLeft: "9px",
                }}
              >
                “Você é o protagonista” <br />
                <br />
                Somos um escritório jovem que prezamos em retratar a sua
                personalidade no seu projeto em um olhar contemporaneo.
                <br />
                <br /> Buscamos transformar desejos em realidade através de um
                design inovador.
                <br />
                <br /> Construímos histórias e laços juntos, tornando essa
                experiência mais que memorável...
              </p>
            </Col>
          </Row>
          <Row
            style={{
              height: "8rem",
              display: "grid",
              alignContent: "end",
              justifyContent: "center",
            }}
          >
            <Col>
              <button
                onClick={() => setExpanded(!expanded)}
                style={{
                  backgroundColor: "rgba(255,255,255,0.3)",
                  borderRadius: "15px",
                  padding: "5px",
                  width: "150px",
                }}
              >
                {expanded ? "Ver Menos" : "Ver Mais"}
              </button>
            </Col>
          </Row>
        </div>
      </motion.div>
      {expanded && (
        <motion.div
          ref={expandedContentRef}
          className="content1"
          // exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundImage: `url(${Teste})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <div>
            <Row>
              <Col>
                <p
                  style={{
                    display: "flex",
                    textAlign: "justify",
                    width: "370px",
                    fontSize: "16px",
                    marginTop: "6.5rem",
                    marginLeft: "9px",
                  }}
                >
                  “Você é o protagonista” <br />
                  <br />
                  Somos um escritório jovem que prezamos em retratar a sua
                  personalidade no seu projeto em um olhar contemporaneo.
                  <br />
                  <br /> Buscamos transformar desejos em realidade através de um
                  design inovador.
                  <br />
                  <br /> Construímos histórias e laços juntos, tornando essa
                  experiência mais que memorável...
                </p>
                <p
                  style={{
                    display: "flex",
                    textAlign: "justify",
                    width: "370px",
                    fontSize: "16px",
                    marginTop: "6.5rem",
                    marginLeft: "9px",
                  }}
                >
                  “Você é o protagonista” <br />
                  <br />
                  Somos um escritório jovem que prezamos em retratar a sua
                  personalidade no seu projeto em um olhar contemporaneo.
                </p>
              </Col>
            </Row>
          </div>
        </motion.div>
      )}
    </>
  );
}
