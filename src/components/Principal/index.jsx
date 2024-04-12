import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import Projeto from "../../assets/PROJETO.jpg";
import Sobre from "../../assets/SOBRE.jpg";
import Galeria from "../../assets/GALERIA.jpg";
import Contato from "../../assets/CONTATO.jpg";
import Item from "../../components/Item";
import SobreComponent from "../../components/Sobre";
import { Row, Col } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import Logo from "../Logo";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

function Principal() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId === selectedItem ? null : itemId);
  };

  return (
    <div className="container">
      <div>
        <Item
          key={1}
          id={1}
          img={Projeto}
          title={"projetos."}
          isSelected={selectedItem === 1}
          onClick={handleItemClick}
        />
        <Item
          key={2}
          id={2}
          img={Sobre}
          title={"sobre."}
          isSelected={selectedItem === 2}
          onClick={handleItemClick}
        />
        <Item
          key={3}
          id={3}
          img={Galeria}
          title={"arte & design."}
          isSelected={selectedItem === 3}
          onClick={handleItemClick}
        />
        <Item
          key={4}
          id={4}
          img={Contato}
          title={"contato."}
          isSelected={selectedItem === 4}
          onClick={handleItemClick}
        />
      </div>
      <AnimatePresence>
        {selectedItem === 1 && (
          <motion.div
            className="content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundImage: `url(${Projeto})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div>
              <div>Conteúdo do !</div>
              <button onClick={() => setSelectedItem(null)}>Voltar</button>
            </div>
          </motion.div>
        )}
        {selectedItem === 2 && (
          <SobreComponent setSelectedItem={setSelectedItem} />
        )}
        {selectedItem === 3 && (
          <motion.div
            className="content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundImage: `url(${Galeria})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div>
              <div>Conteúdo do item</div>
              <button onClick={() => setSelectedItem(null)}>Voltar</button>
            </div>
          </motion.div>
        )}
        {selectedItem === 4 && (
          <motion.div
            className="content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundImage: `url(${Contato})`,
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
        )}
      </AnimatePresence>
    </div>
  );
}

export default Principal;
