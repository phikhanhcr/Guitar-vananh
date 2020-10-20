import React from 'react'

const userContext = React.createContext();

const UserProvider = userContext.Provider;
const UserConsume = userContext.Consumer;

export {
  UserProvider, 
  UserConsume,
  userContext
}