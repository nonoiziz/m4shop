import './scss_dir/Cart.scss'
import { product } from './data/product-data'
import { useState } from 'react';



export default function Cart() {
  const [ products, setProducts ] = useState([...product])
  
  function handleIncreaseClick (productId) {
    setProducts(products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1
          };
        } else {
          return product
        }
      }))
  }
    
  function handleDecreaseClick (productId) {
    setProducts(products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: (product.quantity > 0 ? product.quantity - 1 : product.quantity)
        } 
      } else {
          return product
        }
    }))
  }

  function totalPrice() {
    let total = 0
    products.forEach((product) => {
      total += product.price * product.quantity
    })
    
      return (total < 1200 ? total + 450 : total)
  }
  
  
  const listItems = products.map( item =>
    <div className="products-container">
      <div className="product d-flex ml" key={item.id}>
        <div className="product-image">
          <img src={item.img} className="product-avatar" />
        </div>
        <div className="product-set d-flex">
          <div className="product-info d-flex">
            <div className="product-name ml-5">{item.name}</div>
            <div className="product-price">{item.price * item.quantity}</div>
          </div>
      
          <div className="buyer-action d-flex">
            <div className="circle-container">
            <button onClick={() => {handleDecreaseClick(item.id)}} className="mount-reduce" id='mount-reduce'>-</button></div>
            <div className="mount-counter">{item.quantity}</div>
            <div className="circle-container">
            <button onClick={() => {handleIncreaseClick(item.id);}} className="mount-add" id="mount-add">+</button></div>
          </div>
        </div>
      </div>
      </div>
    
  );
  return <> 
  <section className="cart">
  <h3>購物籃</h3>
  {listItems} 
    <div className="fee-container d-flex">
        <div className="shippingfee">運費</div>
        <div className="totalFee">免運</div>
      </div>
      <div className="totalprice-container d-flex">
        <div className="totalprice-title">小計</div>
        <div className="totalprice">${totalPrice()}</div>
      </div>
      </section>
  </>;
}

