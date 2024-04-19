import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import ProjetoImg from "../../assets/PROJETO.jpg";
import { Row, Col } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import Logo from "../Logo";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import SobreImg from "../../assets/SOBRE.jpg";
import Teste from "../../assets/fundo-studio-jsant.jpg";

export default function Projeto({ setSelectedItem }) {
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

  const items = [
    {
      id: 1,
      img: "https://www.renderizo.com.br/renderizo/cozinha_01_b.jpg",
      title: "Cozinha Moderna",
      subtitle:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      img: "https://www.renderizo.com.br/renderizo/casa-dia-01.jpg",
      title: "Casa ao Dia",
      subtitle: "Luz natural",
    },
    {
      id: 3,
      img: "https://www.renderizo.com.br/renderizo/casa-dia-02.jpg",
      title: "Casa ao Dia",
      subtitle: "Varanda espaçosa",
    },
    {
      id: 4,
      img: "https://www.renderizo.com.br/renderizo/cozinha3_g.jpg",
      title: "Cozinha Gourmet",
      subtitle: "Pronta para jantares",
    },
    {
      id: 5,
      img: "https://www.renderizo.com.br/renderizo/cozinha_01_foco-mesa.jpg",
      title: "Cozinha Focada",
      subtitle: "Detalhe na Mesa",
    },
    {
      id: 6,
      img: "https://d1swvgohc7oxrg.cloudfront.net/filer_public/2a/3f/2a3f8506-047f-4a57-8d05-c4d7fe68300d/v4qqywrw.jpg",
      title: "Sala Focada",
      subtitle: "Mesa e iluminação",
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
          backgroundImage: `url('https://lh3.googleusercontent.com/pw/AP1GczMC_bEPLJncdyvfW_pwM8nV06WqXfzngPvlA2t8mgakaoR0ZpVQn3w96GLmHTHEn8sLjgrW9KZT96_hokng0XKfD4rdDhlOd3DNgfYUpsF59rLkQmHu5bW4TnZqPrbjq4Wg0J2pbErqFdBN2lZrdyVv=w1620-h1620-s-no?authuser=0')`,
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
          <Row style={{ color: "white" }}>
            <Col>
              <Logo />
            </Col>
            <Col style={{ display: "flex", justifyContent: "end" }}>
              <IoClose
                style={{
                  fontSize: "25px",
                  cursor: "pointer",
                  position: "fixed",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  borderRadius: "5px",
                }}
                onClick={() => handleClick()}
              />
            </Col>
          </Row>
          <Row>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Carousel
                style={{
                  height: "70vh",
                  width: "90vw",
                }}
              >
                {items.map((item) => (
                  <Carousel.Item key={item.id}>
                    <img
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                      src={item.img}
                    />
                    {/* <Carousel.Caption>
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </Carousel.Caption> */}
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
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
              {items.map((item) => (
                <Col
                  md={3}
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
                      height: "20rem",
                      backgroundImage: `url(${item.img})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <Card.Body>
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,0.5)",
                          padding: "5px",
                          borderRadius: "5px",
                        }}
                      >
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.subtitle}</Card.Text>
                      </div>
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
