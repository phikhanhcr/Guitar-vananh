import React from 'react'

const OrderContext = React.createContext();

const OrderProvider = OrderContext.Provider;
const OrderConsume = OrderContext.Consumer;

export {
  OrderProvider, 
  OrderConsume,
  OrderContext
}