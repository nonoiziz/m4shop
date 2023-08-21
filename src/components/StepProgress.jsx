import "./scss_dir/StepProgress.scss"


function StepProgress () {

  return (
  <div className="stepprogress-container">
    <div className="progress">
      <h2 className="pay">結帳</h2>
        <div className="step-container">
          <div className="step active">
            <div className='circle-container'></div>
            <div className="label-container">寄送地址</div> 
          </div>
          <div className="step">
            <span className="connect-line"></span>
            <div className='circle-container'></div>
            <div className="label-container">運送方式</div> 
          </div>
          <div className="step">
            <span className="connect-line1"></span>
            <div className='circle-container'></div>
            <div className="label-container">付款資訊</div> 
          </div>
        </div>
    </div>
  </div>
  )
}

export default StepProgress