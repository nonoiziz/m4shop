import '../style/App.scss'
import Header from './Header'
import ProgressControl from './ProgressControl'
import Cart from './Cart'
import { CartContext } from '../Contexts/CartContext'
import { product } from '../Contexts/CartContext'
import { CreditCardProvider } from '../Contexts/CreditCardContext'
import { TotalPriceProvider} from '../Contexts/TotalPriceContext'

function App() {


  return (
  <div className="container">
    <Header />
    <div className="main-container">
      <CreditCardProvider>
        <TotalPriceProvider>
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
       </TotalPriceProvider>
      </CreditCardProvider> 
    </div>
  </div>
  )
}

export default App
