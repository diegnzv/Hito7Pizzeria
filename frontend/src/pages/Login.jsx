import { useState, useContext } from 'react'
import Swal from 'sweetalert2'
import { UserContext } from '../store/UserContext.jsx'

const Login = () => {
  const { login } = useContext(UserContext)

  const [credenciales, setCredenciales] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setCredenciales({ ...credenciales, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (credenciales.password.length < 6) {
      Swal.fire({
        title: 'Error!',
        text: 'La contraseña debe tener 6 o más caracteres.',
        icon: 'error'
      })

      return
    }
    await login(credenciales.email, credenciales.password)
  }

  return (
    <div className='container p-3'>
      <div className='d-flex justify-content-center gap-3 flex-wrap p-0 m-0'>
        <div className='register shadow-lg border border-1 border-dark p-4' style={{ width: '30rem', borderRadius: '10px' }}>
          <h2 className='fw-bold mb-4 text-start'>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className='d-flex flex-column mb-3'>
              <label className='text-gray-700 mb-1'>Correo Electrónico</label>
              <input
                type='email'
                value={credenciales.email}
                onChange={handleChange}
                name='email'
                className='w-100 p-2 border rounded-lg'
                placeholder='Ingresa tu email'
              />
            </div>

            <div className='d-flex flex-column mb-3'>
              <label className='text-gray-700 mb-1'>Contraseña</label>
              <input
                type='password'
                value={credenciales.password}
                onChange={handleChange}
                name='password'
                className='w-100 p-2 border rounded-lg'
                placeholder='Ingresa tu password'
              />
            </div>

            <div className='d-flex flex-column mt-4'>
              <button
                type='submit'
                className='btn btn-primary'
                disabled={!credenciales.email || !credenciales.password}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login