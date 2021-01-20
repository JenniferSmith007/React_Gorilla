import "./App.css";
import Receipt from "./components/Receipt";
import { useState } from "react";
import receipts from "./Records";
import Header from "./components/Header";
function App() {
  const [receipt, setReceipt] = useState(receipts);
  console.log(receipts);

  return (
    <div className="App">
      <Header />

      <main>
        <div className="receipt_list">
          {receipts.map((receipt, index) => {
            return <Receipt key={`${index} Receipt`} {...receipt} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
