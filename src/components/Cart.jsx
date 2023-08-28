import './scss_dir/Cart.scss'
import {product} from './data/product-data'


function Cart() {
  const listItems = product.map( item =>
    <div className="products-container">
      <div className="product d-flex" key={item.id}>
        <div className="product-image">
          <img src={item.img} className="product-avatar" />
        </div>
        <div className="product-set d-flex">
          <div className="product-info d-flex">
            <div className="product-name">{item.name}</div>
            <div className="product-price">{item.price}</div>
          </div>
      
          <div className="buyer-action d-flex">
            <div className="circle-container">
            <button className="mount-reduce" id='mount-reduce'>-</button></div>
            <div className="mount-counter">5</div>
            <div className="circle-container">
            <button className="mount-add" id="mount-add">+</button></div>
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
        <div className="totalprice">$5298</div>
      </div>
      </section>
  </>;
}

export default Cart