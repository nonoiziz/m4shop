import "./scss_dir/Step2.scss"

function Step2() {
  return (
    <section className="Step2">
      <div className="step2-container">
        <h2 className="shipping">運送方式</h2>
        <div className="shippingmethod-container">

          <div className="stander-shipping-container">
            <input type="radio" className="select-stander"  />
            <div className="stander-shipping-info">
              <span className="stander-shipping">標準運送</span>
              <span className="spending-days">約3~7個工作天</span>
            </div>
            <span className="stander-shipping-price">免費</span>
          </div>

          <div className="DHL-shipping-container">
            <input type="radio" className="select-DHL"  />
            <div className="DHL-shipping-info">
              <span className="stander-shipping">DHL貨運</span>
              <span className="spending-days">48小時內送達</span>
            </div>
            <span className="stander-shipping-price">$500</span>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Step2