import { useState } from "react";
import styles from "./ListGroup.module.css"; // utilisation de modules CSS, va créer un nom unique pour notre classe css donc pas de soucis si une autre classe avec le mm nom dans un autre fichier

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // utilisée pour remonter item vers component app
}
function ListGroup(props: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1); // toujours de cette forme const [state, setState] = useState(initialState)
  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length === 0 && <p>No item found</p>}
      {/*Facon classe d'afficher qq chose ou rien */}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {/* Chaque item du tableau items est converti en rajoutant li, doit etre
        dans {} pour interpreter.Dans react chaque li doit avoir une key. ici on prend item mais en general on a item.id 
        Pour le style, on utlise .join pour mettre plusieurs styles
        */}
        {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
