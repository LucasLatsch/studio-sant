import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
function Item({ title, id, isSelected, onClick, img }) {
  return (
    <div
      className="item"
      onClick={() => onClick(id)}
      style={{ backgroundImage: `url(${img})` }}
    >
      <h1 className="text">{title}</h1>
    </div>
  );
}

export default Item;
