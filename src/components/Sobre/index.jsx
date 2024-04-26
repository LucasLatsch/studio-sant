import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { motion } from "framer-motion";
import SobreImg from "../../assets/SOBRE.jpg";
import Teste from "../../assets/fundo-studio-jsant.jpg";
import Logo from "../Logo";
import { IoClose } from "react-icons/io5";
import { Row, Col } from "react-bootstrap";
import YouTube from "react-youtube";
import Card from "react-bootstrap/Card";
import Video from "../Video";

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
        <div
          style={{
            display: "flex",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Row>
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
          <Row style={{ justifyContent: "space-between" }}>
            <Col md={4}>
              <p
                style={{
                  display: "flex",
                  textAlign: "justify",
                  width: "370px",
                  fontSize: "16px",
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
            <Col md={4}>
              <Video />
            </Col>
          </Row>
          <Row
            style={{
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
          }}
        >
          <div>
            <Row
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                padding: "15px",
              }}
            >
              {[1, 2, 3, 4].map((item) => (
                <Col
                  md={4}
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                    padding: "10px",
                  }}
                >
                  <Card
                    style={{
                      width: "18rem",
                      height: "20rem",
                      backgroundImage: `url(${SobreImg})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <Card.Body
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        flexDirection: "column",
                      }}
                    >
                      <Card.Title>Jhorran Sant</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </motion.div>
      )}
    </>
  );
}
