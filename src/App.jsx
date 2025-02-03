import { useState } from "react";

export default function App() {
  const [shoppingList, setShoppingList] = useState(["Pane", "Latte", "Uova"]);

  return (
    <div>
      <h1>Lista della spesa</h1>
      <ul>
        {shoppingList.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}
