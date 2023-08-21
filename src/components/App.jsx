import './scss_dir/App.scss'
import StepProgress from'./StepProgress.jsx'
import Header from './Header'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'


function App() {
  return (
  <div className="container">
    <Header />
    <div className="info-container">
      <StepProgress />
      <Step1 />
      <Step2 />
      <Step3 />
    </div>
  </div>
  )
}

export default App
