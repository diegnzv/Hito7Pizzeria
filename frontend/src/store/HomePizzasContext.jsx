import { createContext, useEffect, useState } from 'react'

export const HomePizzasContext = createContext()

const HomePizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)

  const getPizzas = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/pizzas')
      const data = await res.json()
      setPizzas(data)
    } catch (error) {
      console.error('Error al obtener las pizzas:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPizzas()
  }, [])

  const stateGlobal = { pizzas, loading }

  return (<HomePizzasContext.Provider value={stateGlobal}>{children}</HomePizzasContext.Provider>)
}

export default HomePizzasProvider
