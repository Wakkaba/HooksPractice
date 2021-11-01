import classes from './Cart.module.css'
import { Modal } from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItems from "./CartItems";


const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0;

   const cartItemRemoveHandler = (id) => {
     cartCtx.removeItem(id)
   }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount:1})
  }


  const cartItems = <ul className={classes['cart-items']}>
    {cartCtx.items.map((item) => <CartItems
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
      />
    )}
  </ul>

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes['button--alt']}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart