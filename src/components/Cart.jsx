import '../style/Cart.scss'
import { useState } from 'react';
import CartItem from './CartItem'
import { useContext } from 'react'
import { CartContext } from '../assets/CartContext'

export default function Cart() {
  const  product   = useContext(CartContext)
  const [ products, setProducts ] = useState(product)
  

  function handleChangeClick (productId, action) {
    setProducts(products.map((product) => {
        if (product.id === productId) {
          if (action === 'increase') {
            return { ...product, quantity: product.quantity + 1 };
        } else if (action === 'decrease' && product.quantity > 0 ) {
          return { ...product, quantity: product.quantity - 1}
        }
      }
    return product;
  }))
  }
    

  function totalPrice() {
    const total = products.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity
    }, 0);
      return (total < 1200 ? total + 350 : total)
  }
  
  
 
  return <> 
  <section className="cart">
  <h3>購物籃</h3>
  {products.map((item) => 
  <CartItem 
    key={item.id}
    item={item}
    handleChangeClick={handleChangeClick}
    
    /> )}
    <div className="fee-container d-flex">
        <div className="shippingfee">運費</div>
        <div className="totalFee">{totalPrice() < 1200 ? "要加收350運費" : "這單免運"}</div>
      </div>
      <div className="totalprice-container d-flex">
        <div className="totalprice-title">小計</div>
        <div className="totalprice">${totalPrice()}</div>
      </div>
      </section>
  </>;
}

