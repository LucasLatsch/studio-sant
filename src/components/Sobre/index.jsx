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

  const equipe = [
    {
      id: 1,
      img: "https://github.com/LucasLatsch/Img/blob/main/Jhorran%20Sant.jpg?raw=true",
      title: "Jhorran",
      subtitle: "Some quick example text",
    },
    {
      id: 2,
      img: "https://github.com/LucasLatsch/Img/blob/main/MATHEUS%20CAMARA.jpg?raw=true",
      title: "Matheus",
      subtitle: "Luz natural",
    },
    {
      id: 3,
      img: "https://github.com/LucasLatsch/Img/blob/main/JORGE%20ARAUJO.jpg?raw=true",
      title: "Jorge",
      subtitle: "Varanda espaçosa",
    },
    {
      id: 4,
      img: "https://github.com/LucasLatsch/Img/blob/main/Lucas%20Latsch.jpg?raw=true",
      title: "Lucas",
      subtitle: "Pronta para jantares",
    },
  ];

  return (
    <>
      <motion.div
        className="content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundImage: `url("https://github.com/LucasLatsch/Img/blob/main/SOBRE.jpg?raw=true")`,
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
            <Col md={5} style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  borderRadius: "20px",
                }}
              >
                <YouTube
                  className="sobre"
                  videoId="84oBrArWcM0"
                  opts={{
                    width: "470px",
                    height: "264px",
                    playerVars: {
                      mute: 0,
                      autoplay: 1,
                      controls: 1,
                      fs: 1,
                      color: "white",
                      loop: 0,
                      rel: 0,
                    },
                  }}
                />
              </div>
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
              {equipe.map((item) => (
                <Col
                  md={4}
                  key={item.id}
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
                      backgroundImage: `url(${item.img})`,
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
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.subtitle}</Card.Text>
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
