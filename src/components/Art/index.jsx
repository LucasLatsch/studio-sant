import React from "react";
import GaleriaImg from "../../assets/GALERIA.jpg";
import { Row, Col } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import Logo from "../Logo";
import { motion } from "framer-motion";



export default function Art({ setSelectedItem }) {
 return (
    <>
      <motion.div
            className="content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundImage: `url(${GaleriaImg})`,
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

            
      </motion.div>
    </>
 );
}