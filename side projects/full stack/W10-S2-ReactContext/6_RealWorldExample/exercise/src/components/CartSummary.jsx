import { useBasket } from '../contexts/BasketContext';

const CartSummary = () => {

    const { basket, calculateTotal } = useBasket();
  return (
    <div>{basket.length} item(s) in your cart: £{calculateTotal()}</div>
  )
}

export default CartSummary