import React from 'react'

const CartContext = React.createContext();

const CartProvider = CartContext.Provider;
const CartConsume = CartContext.Consumer;

export {
  CartProvider, 
  CartConsume,
  CartContext
}