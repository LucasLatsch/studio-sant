import React from "react";
import ProjetoImg from "../../assets/PROJETO.jpg";
import { Row, Col } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import Logo from "../Logo";
import { motion } from "framer-motion";
import Carousel from 'react-bootstrap/Carousel';

export default function Projeto({ setSelectedItem }) {
 return (
    <>
      <motion.div
            className="content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundImage: `url(${ProjetoImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
                            
              justifyContent: "start",
              alignItems: "center",
            }}
          >
           <Row style={{ width: "98vw" }}>
              <Col>
                <Logo />
              </Col>
              <Col style={{ display: "flex", justifyContent: "end" }}>
                <IoClose
                  style={{ fontSize: "25px", cursor: "pointer" }}
                  onClick={() => setSelectedItem(null)}
                />
              </Col>
            </Row>                        
            <Row>
              <Carousel 
              style={{
        width: "90vw",
        height: "90vh"
       }}>
      <Carousel.Item>
       <img
       style={{
        width: "100%",
        height: "100%"
       }}
      src={ProjetoImg}
    />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
       style={{
        width: "100px",
        height: "100px"
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
        width: "100px",
        height: "100px"
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
   </Row> 
      </motion.div>
    </>
 );
}
