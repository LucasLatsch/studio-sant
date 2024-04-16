import React from "react";
import ContatoImg from "../../assets/CONTATO.jpg";
import { Row, Col } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import Logo from "../Logo";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { motion } from "framer-motion";



export default function Contato({ setSelectedItem }) {
 return (
    <>
      <motion.div
            className="content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            style={{
               backgroundImage: `url(${ContatoImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              justifyContent: "space-between",
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
            <Row style={{ width: "100%" }}>
              <Col style={{ marginLeft: "9px" }}>
                <p>Rio de Janeiro</p>
                <p>jsantarquitetura@gmail.com</p>
                <p>+55 21 988141565</p>
              </Col>
            </Row>
            <Row style={{ width: "100%" }}>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "end",
                  color: "white",
                  fontSize: "20px",
                  gap: "20px",
                }}
              >
                <FaFacebookF />
                <FaInstagram />
                <FaPinterestP />
              </Col>
            </Row>
          </motion.div>
         </>
 );
}
