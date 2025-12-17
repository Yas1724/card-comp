import { useEffect, useState } from "react";
import { getCards, deleteCard } from "./api.js";
import Card from "./components/Card.jsx";
import CreateCardForm from "./components/CreateCardForm.jsx";
import "./index.css";
const userId = localStorage.getItem("userId") || crypto.randomUUID();
localStorage.setItem("userId",userId);

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards().then(setCards);
  }, []);

  async function handleDelete(id) {
    await deleteCard(id);
    setCards(cards.filter(c => c._id !== id));
  }

  function handleAdd(card) {
    setCards([...cards, card]);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile Cards</h1>

      <CreateCardForm onAdd={handleAdd} />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {cards.map(card => (
          <Card key={card._id} card={card} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;

