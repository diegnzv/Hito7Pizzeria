import { toast } from 'react-toastify'
import { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  const calcularTotal = (nuevoCarrito) => {
    const nuevoTotal = nuevoCarrito.reduce((tot, item) => tot + item.count * item.price, 0)
    setTotal(nuevoTotal)
  }

  const handleAgregar = (pizza) => {
    setCartItems((prevCart) => {
      const existe = prevCart.find((item) => item.id === pizza.id)
      let nuevoCarrito
      if (existe) {
        nuevoCarrito = prevCart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        )
      } else {
        nuevoCarrito = [...prevCart, { ...pizza, count: 1 }]
      }
      calcularTotal(nuevoCarrito)
      toast('Se agregó la pizza !')
      return nuevoCarrito
    })
  }

  const handleSumar = (id) => {
    setCartItems((prevCart) => {
      const nuevoCarrito = prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
      calcularTotal(nuevoCarrito)
      return nuevoCarrito
    })
  }

  const handleRestar = (id) => {
    setCartItems((prevCart) => {
      const nuevoCarrito = prevCart
        .map((item) => (item.id === id ? { ...item, count: item.count - 1 } : item))
        .filter((item) => item.count > 0)
      calcularTotal(nuevoCarrito)
      return nuevoCarrito
    })
  }

  const stateGlobal = { cartItems, total, handleAgregar, handleSumar, handleRestar }

  return (
    <CartContext.Provider value={stateGlobal}>{children}</CartContext.Provider>
  )
}
export default CartProvider
