import { useEffect, useState, useContext } from 'react'
import { formateaNumero } from '../utils/utiles.js'
import { useParams } from 'react-router-dom'
import { CartContext } from '../store/CartContext.jsx'
import { UserContext } from '../store/UserContext.jsx'

const Pizza = () => {
  const [pizza, setPizza] = useState({})
  const { id } = useParams()
  const { handleAgregar } = useContext(CartContext)
  const { token } = useContext(UserContext)

  const getPizza = async (idpizza) => {
    const res = await fetch(`http://localhost:5000/api/pizzas/${idpizza}`)
    const data = await res.json()

    return setPizza(data)
  }

  useEffect(() => {
    getPizza(id)
  }, [id])

  return (
    <div className='container p-3'>
      <div className='d-flex flex-wrap flex-md-nowrap w-100 border border-1 border-secondary overflow-hidden'>
        <div className='m-0 p-0 w-100 w-md-50'>
          <img src={pizza.img} alt={pizza.name} className='w-100 h-100 object-fit-cover' />
        </div>

        <div className='m-0 p-3 w-100 w-md-50 align-items-center'>
          <h4 className='card-title fw-bold text-start'>{`Pizza ${pizza.name}`}</h4>
          <hr className='w-100 mx-auto' />

          <p className='text-start text-muted m-3 fw-semibold'>{pizza.desc}</p>
          <p className='text-start text-muted m-3 fw-semibold'>Ingredientes:</p>

          <ul className='text-start text-muted m-3 fw-semibold'>
            {pizza.ingredients?.map((ingrediente) => <li key={ingrediente}> 🍕 {ingrediente} </li>)}
          </ul>

          <hr className='w-100 mx-auto' />

          <div className='d-flex justify-content-between align-items-center m-0 p-0'>
            <h5 className='fw-bold text-dark'>Precio: ${formateaNumero(pizza.price)}</h5>
            <button
              className='btn btn-dark btn-sm'
              disabled={!token}
              onClick={() => handleAgregar({ id, name: pizza.name, img: pizza.img, price: pizza.price })}
            >Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pizza