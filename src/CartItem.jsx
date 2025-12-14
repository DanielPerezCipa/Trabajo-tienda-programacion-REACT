import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "./CartSlice";
import "./CartItem.css";

function CartItem() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
  <div className="cart-container">
    <h2>Carrito de compras</h2>

    {cart.length === 0 && (
      <p style={{ color: "#aaa", marginTop: "20px" }}>
        Tu carrito está vacío
      </p>
    )}

    {cart.map(item => (
      <div className="cart-item" key={item.id}>
        <span>{item.name}</span>
        <button onClick={() => dispatch(decrease(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increase(item.id))}>+</button>
        <button onClick={() => dispatch(removeItem(item.id))}>Eliminar</button>
      </div>
    ))}

    {cart.length > 0 && (
      <>
        <div className="total">Total: ${total}</div>

        <div className="cart-actions">
          <button className="continue-btn">Continuar comprando</button>
          <button className="pay-btn">Pagar</button>
        </div>
      </>
    )}
  </div>
);

}

export default CartItem;
