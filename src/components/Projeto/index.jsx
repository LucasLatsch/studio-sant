import React, { useState, useEffect, useRef } from "react";
import ProjetoImg from "../../assets/PROJETO.jpg";
import { Row, Col } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import Logo from "../Logo";
import { motion } from "framer-motion";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
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
     <div>
           <Row style={{ width: "98vw" }}>
              <Col>
                <Logo />
              </Col>
              <Col style={{ display: "flex", justifyContent: "end" }}>
                <IoClose
                  style={{ fontSize: "25px", cursor: "pointer" }}
                  onClick={() => handleClick()}
                />
              </Col>
            </Row>                        
            <Row> 
            <div style={{
        height: "70vh", display: "flex", justifyContent: "center", alignItems: "center"}}        
      > 
              <Carousel>
      <Carousel.Item>
       <img
       style={{
        height: "40rem",
        width: "48rem"
       }}
      src="https://www.renderizo.com.br/renderizo/cozinha_01_b.jpg"
    />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
       style={{
        height: "40rem"
       }}
      src={ProjetoImg}
    />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
       style={{
        height: "40rem"
       }}
      src={ProjetoImg}
    />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
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
             {[1,2,3,4].map((item) => (
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
              <Card style={{ width: '18rem', height: "20rem", backgroundImage: `url(${SobreImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover"}}>
      
      <Card.Body style={{ display: "flex", justifyContent: "end", flexDirection: "column"}}>
        <Card.Title>Jhorran Sant</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. 
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
