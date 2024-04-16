import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import Projeto from "../../assets/PROJETO.jpg";
import Sobre from "../../assets/SOBRE.jpg";
import Galeria from "../../assets/GALERIA.jpg";
import Contato from "../../assets/CONTATO.jpg";
import Item from "../../components/Item";
import SobreComponent from "../../components/Sobre";
import ContatoComponent from "../../components/Contato";
import ProjetoComponent from "../../components/Projeto";
import GaleriaComponent from "../../components/Art";
import { Row, Col } from "react-bootstrap";


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
        {selectedItem === 1 && ( <ProjetoComponent setSelectedItem={setSelectedItem} />
        )}
        {selectedItem === 2 && ( <SobreComponent setSelectedItem={setSelectedItem} />
        )}
        {selectedItem === 3 && ( <GaleriaComponent setSelectedItem={setSelectedItem} />
        )}
        {selectedItem === 4 && ( <ContatoComponent setSelectedItem={setSelectedItem} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Principal;
