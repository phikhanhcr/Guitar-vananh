import io from 'socket.io-client'
import React, { useEffect, useState } from 'react'
import { getData } from './utils/FetchData';

const DataContext = React.createContext();
export default DataContext;

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    getData('/api/all-product')
      .then(res => res.data)
      .then(data => {
        // console.log(data)
        setProducts(data)
      }).catch(err => {
        console.log(err)
      })
    const socket = io();
    setSocket(socket)
    return () => socket.close()
  }, [])

  const state = {
    products: [products, setProducts],
    socket
  }
  return (
    <DataContext.Provider value={{ state }}>
      {children}
    </DataContext.Provider>
  )
}