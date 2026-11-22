import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQty, total, clearCart } = useCart();
  const [payment, setPayment] = useState("card");
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [swishPhone, setSwishPhone] = useState("");

  if (done) {
    return (
      <div className="cart-page">
        <h2>✅ Thank you, {name || "friend"}!</h2>
        <p>Your order is confirmed. Payment: {payment}</p>
        <p>We will prepare your coffee! ☕</p>
      </div>
    );
  }

  if (cart.length === 0) return <div className="cart-page"><h2>Your basket is empty 🛒</h2><p>Go to Menu and add something!</p></div>;

  const canPay = name.trim() !== "" && (payment !== "card" || card.length >= 12) && (payment !== "swish" || swishPhone.length >= 7);

  return (
    <div className="cart-page">
      <h2>Your Basket 🛒</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} width={70} />
          <div>
            <strong>{item.name}</strong>
            <p>{item.price} kr</p>
          </div>
          <div>
            <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
            <span> {item.qty} </span>
            <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
          </div>
          <p>{item.price * item.qty} kr</p>
          <button onClick={() => removeFromCart(item.id)}>❌</button>
        </div>
      ))}

      <h3>Total: {total} kr</h3>

      <h3>Your Details</h3>
      <input placeholder="Your name *" value={name} onChange={e => setName(e.target.value)} />

      <h3>Payment Method</h3>
      <label><input type="radio" checked={payment === "card"} onChange={() => setPayment("card")} /> 💳 Card</label><br />
      <label><input type="radio" checked={payment === "swish"} onChange={() => setPayment("swish")} /> 📱 Swish</label><br />
      <label><input type="radio" checked={payment === "cash"} onChange={() => setPayment("cash")} /> 💵 Cash on Delivery</label>

      {payment === "card" && (
        <div>
          <input placeholder="Card number *" value={card} onChange={e => setCard(e.target.value)} />
          <input placeholder="MM/YY" />
          <input placeholder="CVC" />
        </div>
      )}
      {payment === "swish" && <input placeholder="Phone for Swish *" value={swishPhone} onChange={e => setSwishPhone(e.target.value)} />}
      {payment === "cash" && <p>Pay when you pick up your coffee ☕</p>}

      <br />
      <button disabled={!canPay} onClick={() => { setDone(true); clearCart(); }}>
        Pay {total} kr - Confirm Order
      </button>
      {!canPay && <p style={{color:'red'}}>Fill your name + payment details to pay</p>}
    </div>
  );
}