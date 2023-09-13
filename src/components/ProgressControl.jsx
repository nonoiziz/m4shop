import "../style/ProgressControl.scss"
import { useState} from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import StepProgress from './StepProgress'
import { useCreditCard } from '../Contexts/CreditCardContext'
import { useTotalPrice } from "../Contexts/TotalPriceContext"

function ProgressControl() {
  const [currentStep, setCurrentStep] = useState(1);
  const {cardHolder, cardNumber, expireDate, cvc} = useState('');
  const { creditCardInfo } = useCreditCard();
  const { total } = useTotalPrice()


  function handleNextButtonClick(){
    if (currentStep < 3){
      setCurrentStep(currentStep + 1) 
    }
  }

  function handlePreviousButtonClick(){
    if (currentStep > 1){
      setCurrentStep(currentStep - 1)
    }
  }

  function handleOrderConfirmation() {
  console.log('持卡人姓名:', creditCardInfo.cardHolder);
  console.log('卡號:', creditCardInfo.cardNumber);
  console.log('有效期限:', creditCardInfo.expireDate);
  console.log('CVC / CCV:', creditCardInfo.cvc);
  console.log('小計:', total)
}


  return (
    <>
    <StepProgress currentStep={currentStep} />
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 /> }
      {currentStep === 3 && <Step3 
          cardHolder={cardHolder}
          cardNumber={cardNumber}
          expireDate={expireDate}
          cvc={cvc}
          total={total}
      /> }
      <div className="progressControl-container">
        <div className="previouspage-container">
          {currentStep > 1 && (
          <button onClick={handlePreviousButtonClick} className="previouspage-button" id="previouspage-button">上一頁</button> )}
        </div>

        <div className="nextpage-container">
          <button 
            onClick={currentStep < 3 ? handleNextButtonClick : handleOrderConfirmation} 
            className="nextpage-button" 
            id="nextpage-button">{currentStep < 3 ? '下一頁' : '確認下單'}</button>
        </div>
      </div>
    </>
  )
}

export default ProgressControl