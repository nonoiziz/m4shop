import './scss_dir/App.scss'
import StepProgress from'./StepProgress.jsx'
import Header from './Header'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import ProgressControl from './ProgressControl'
import Cart from './Cart'

function App() {
  return (
  <div className="container">
    <Header />
    <div className='main-container'>
      <div className="stepProgress-container">
      <StepProgress />
      </div>
      <div className="info-container">
        
        <div className="left-container">
         <Step1 />
         <Step2 />
         <Step3 /> 
         <ProgressControl />  
        </div>
        <div className="right-container">
         <Cart />
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default App
