import { useState } from "react";

export default function App() {
  const [shoppingList, setShoppingList] = useState(["Pane", "Latte", "Uova"]);
  const [productName, setProductName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setShoppingList([...shoppingList, productName]);

    setProductName("");
  };

  return (
    <div>
      <h1>Lista della spesa</h1>
      <ul>
        {shoppingList.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
      <hr />
      <h2>Aggiungi prodotto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={productName}
          onChange={(event) => {
            setProductName(event.target.value);
          }}
          placeholder="Inserisci prodotto"
        />
        <button type="submit">Invia</button>
      </form>
    </div>
  );
}
