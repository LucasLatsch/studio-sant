import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import Item from "../../components/Item";
import SobreComponent from "../../components/Sobre";
import ContatoComponent from "../../components/Contato";
import ProjetoComponent from "../../components/Projeto";
import GaleriaComponent from "../../components/Art";

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
          img={
            "https://github.com/LucasLatsch/Img/blob/main/RS_IMG01.jpg?raw=true"
          }
          title={"projetos."}
          isSelected={selectedItem === 1}
          onClick={handleItemClick}
        />
        <Item
          key={2}
          id={2}
          img={
            "https://github.com/LucasLatsch/Img/blob/main/SOBRE.jpg?raw=true"
          }
          title={"sobre."}
          isSelected={selectedItem === 2}
          onClick={handleItemClick}
        />
        <Item
          key={3}
          id={3}
          img={
            "https://github.com/LucasLatsch/Img/blob/main/GALERIA02.jpeg?raw=true"
          }
          title={"arte & design."}
          isSelected={selectedItem === 3}
          onClick={handleItemClick}
        />
        <Item
          key={4}
          id={4}
          img={
            "https://github.com/LucasLatsch/Img/blob/main/CONTATO.jpg?raw=true"
          }
          title={"contato."}
          isSelected={selectedItem === 4}
          onClick={handleItemClick}
        />
      </div>
      <AnimatePresence>
        {selectedItem === 1 && (
          <ProjetoComponent setSelectedItem={setSelectedItem} />
        )}
        {selectedItem === 2 && (
          <SobreComponent setSelectedItem={setSelectedItem} />
        )}
        {selectedItem === 3 && (
          <GaleriaComponent setSelectedItem={setSelectedItem} />
        )}
        {selectedItem === 4 && (
          <ContatoComponent setSelectedItem={setSelectedItem} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Principal;
