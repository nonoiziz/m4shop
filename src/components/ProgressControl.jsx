import "./scss_dir/ProgressControl.scss"
import { useState} from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import StepProgress from './StepProgress'

function ProgressControl() {
  const [currentStep, setCurrentStep] = useState(1);

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

  return (
    <>
    <StepProgress currentStep={currentStep} />
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 currentStep={currentStep} /> }
      {currentStep === 3 && <Step3 currentStep={currentStep} /> }
      <div className="progressControl-container">
        <div className="previouspage-container">
          {currentStep > 1 && (
          <button onClick={handlePreviousButtonClick} className="previouspage-button" id="previouspage-button">上一頁</button> )}
        </div>

        <div className="nextpage-container">
          <button onClick={handleNextButtonClick} className="nextpage-button" id="nextpage-button">{currentStep < 3 ? '下一頁' : '確認下單'}</button>
        </div>
      </div>
    </>
  )
}

export default ProgressControl