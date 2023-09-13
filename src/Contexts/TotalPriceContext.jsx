import { createContext, useContext, useState } from 'react'

const TotalPriceContext = createContext()

export const TotalPriceProvider = ({ children }) => {
  const [ total, setTotalPrice ] = useState(0)
  
  const updateTotalPrice = (newTotal) => {
    setTotalPrice(newTotal)
  }

  return (
    <TotalPriceContext.Provider value={{total, updateTotalPrice}}>
      { children }
    </TotalPriceContext.Provider>

  )
}

export const useTotalPrice = () => {
  return useContext(TotalPriceContext)
}