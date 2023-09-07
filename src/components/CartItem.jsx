export default function CartItem({item, handleChangeClick}) {
  return (
  <div className="products-container" key={item.id}>
      <div className="product d-flex ml" >
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
            <button onClick={() => {handleChangeClick(item.id, 'decrease')}} className="mount-reduce" id='mount-reduce'>-</button></div>
            <div className="mount-counter">{item.quantity}</div>
            <div className="circle-container">
            <button onClick={() => {handleChangeClick(item.id, 'increase');}} className="mount-add" id="mount-add">+</button></div>
          </div>
        </div>
      </div>
    </div>
    )
}