import "../style/Step3.scss"

import { useCreditCard } from "../Contexts/CreditCardContext"

function Step3() {

  const { creditCardInfo, setCreditCardInfo} = useCreditCard();


  function handleChange(e) {
    const { name, value } = e.target;
    setCreditCardInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }

  return (
    <section>
      <div className="step3-container">
        <h2 className="pay-info">付款資訊</h2>
        <div className="input-container3">
          <div className="cardholder d-flex flex-column">
            <label htmlFor="" className="cardholder-label">持卡人姓名</label>
            <input 
              type="text" 
              className="cardholder-input" 
              id="cardholder" 
              placeholder="John Doe" 
              value={creditCardInfo.cardHolder}
              name='cardHolder'
              onChange={handleChange}/>
          </div>

          <div className="cardnumber d-flex flex-column">
            <label htmlFor="" className="cardnumber-label">卡號</label>
            <input 
              type="text" 
              className="cardnumber-input" 
              id="cardnumber-input" 
              placeholder="1111 2222 3333 4444"
              value={creditCardInfo.cardNumber}
              name='cardNumber'
              onChange={handleChange}/>
          </div>

          <div className="cardinfo ">
          <div className="expiredate d-flex flex-column">
            <label htmlFor="" className="expiredate-label" >有效期限</label>
            <input 
              type="text" 
              className="expiredate-input" 
              id="expiredate-input" 
              placeholder="MM/YY"
              value={creditCardInfo.expireDate}
              name='expireDate'
              onChange={handleChange}/>
          </div>

          <div className="cvc d-flex flex-column">
            <label htmlFor="" className="cvc-label">CVC / CCV</label>
            <input 
              type="text" 
              className="cvc-input" 
              id="cvc-input" 
              placeholder="123"
              value={creditCardInfo.cvc}
              name='cvc'
              onChange={handleChange}/>
          </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Step3