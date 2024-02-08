import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import ExpandableText from "./components/ExpandableText";

/* function renderAlert() {
  <Alert isDismissable={true}>
    <b>yoo</b>
  </Alert>;
} */
/* function App() {
  const [isAlertVisible, setAlertVisible] = useState(false);
  let items = ["A", "B", "C", "D"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleClickButton = () => {
    setAlertVisible(false);
  };
  return (
    <div>
      <CiCalendarDate size="40" />
      <ListGroup
        items={items}
        heading="List Heading"
        onSelectItem={handleSelectItem}
      />
      {isAlertVisible && (
        <Alert isDismissable={true} onClickButton={handleClickButton}>
          ******
        </Alert>
      )}
      <Button clickFunction={() => setAlertVisible(true)} color="danger">
        <b>TEXT</b>
      </Button>
    </div>
  );
} */
function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClickGame = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };
  const handleClickPizza = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "mozzarella"] });
  };
  const handleClickCart = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  return (
    <>
      <p>{game.player.name}</p>
      <button onClick={handleClickGame}>gameButton</button>
      {pizza.toppings.map((topping, index) => (
        <p>{topping}</p>
      ))}
      <button onClick={handleClickPizza}>pizzaButton</button>
      {cart.items.map((item, index) => (
        <p>
          {item.title} : {item.quantity}
        </p>
      ))}
      <button onClick={handleClickCart}>cartButton</button>
      <ExpandableText maxChar={100}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id culpa esse
        quis consequuntur incidunt officia pariatur. Dignissimos quae harum,
        impedit molestias soluta consectetur laborum? Delectus odit sapiente
        facilis placeat quas!
      </ExpandableText>
    </>
  );
}

export default App;
