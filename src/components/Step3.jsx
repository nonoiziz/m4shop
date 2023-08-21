import "./scss_dir/Step3.scss"

function Step3() {
  return (
    <section className="Step3">
      <div className="step3-container">
        <h2 className="pay-info">付款資訊</h2>
        <div className="input-container3">
          <div className="cardholder d-flex flex-column">
            <label htmlFor="" className="cardholder-label">持卡人姓名</label>
            <input type="text" className="cardholder-input" id="cardholder" placeholder="John Doe"/>
          </div>

          <div className="cardnumber d-flex flex-column">
            <label htmlFor="" className="cardnumber-label">卡號</label>
            <input type="text" className="cardnumber-input" id="cardnumber-input" placeholder="1111 2222 3333 4444"/>
          </div>

          <div className="cardinfo ">
          <div className="expiredate d-flex flex-column">
            <label htmlFor="" className="expiredate-label" >有效期限</label>
            <input type="text" className="expiredate-input" id="expiredate-input" placeholder="MM/YY"/>
          </div>

          <div className="cvc d-flex flex-column">
            <label htmlFor="" className="cvc-label">CVC / CCV</label>
            <input type="text" className="cvc-input" id="cvc-input" placeholder="123"/>
          </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Step3