import '../style/App.scss'
import Header from './Header'
import ProgressControl from './ProgressControl'
import Cart from './Cart'



function App() {


  return (
  <div className="container">
    <Header />
    <div className="main-container">
  
      <div className="info-container">
        
        <div className="left-container">
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
