import '../style/App.scss'
import Header from './Header'
import ProgressControl from './ProgressControl'
import Cart from './Cart'
import { CartContext } from '../assets/CartContext'
import { product } from '../assets/CartContext'

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
        <CartContext.Provider value={product}>
         <Cart />
         </CartContext.Provider> 
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default App
