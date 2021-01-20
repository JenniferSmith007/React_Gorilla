import { useState } from "react";
function Receipt({ person, order, paid, toppings, ...receipt }) {
  const [toggle, setToggle] = useState(paid);
  function Paids() {
    setToggle((paidss) => (paidss ? "Paid" : "Not Paid"));
  }

  console.log(Paids);
  return (
    <div className="receipt_container">
      <div className="receipt">
        <h1 className="person">{person}</h1>

        <h2 className="order">Order: {order.main}</h2>

        <h2>Protein: {order.protein}</h2>
        <h2>Sauce: {order.sauce}</h2>
        <h2>Toppings: {order.toppings}</h2>
        <h2>Drink: {order.drink}</h2>
        <h2>Price: ${order.cost}.00</h2>
        <h2>{receipt.Paids}</h2>

        <div className="cont1">
          <button onClick={Paids}>Details</button>
          <h3>{toggle}</h3>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
