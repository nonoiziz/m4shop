import { createContext, useContext, useState } from 'react'

const CreditCardContext = createContext()

export const CreditCardProvider = ({ children }) => {
  const [ creditCardInfo, setCreditCardInfo ] = useState({
    cardHolder: '',
    cardNumber: '',
    expireDate: '',
    cvc: '',
  });

  return (
    <CreditCardContext.Provider value={{creditCardInfo, setCreditCardInfo}} >
      { children }
    </CreditCardContext.Provider>
  );
};

export const useCreditCard = () => {
 return useContext(CreditCardContext)
}