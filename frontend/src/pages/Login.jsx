import Swal from 'sweetalert2'
import { useState } from 'react'

const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    passw: ''
  })

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (login.passw.length < 6) {
      Swal.fire({
        title: 'Error!',
        text: 'La contraseña debe tener 6 o más caracteres.',
        icon: 'error'
      })

      return
    }

    Swal.fire({
      title: 'Listo!',
      text: 'Autentificación correcta.',
      icon: 'ok'
    })

    setLogin({ email: '', passw: '' })
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
                value={login.email}
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
                value={login.passw}
                onChange={handleChange}
                name='passw'
                className='w-100 p-2 border rounded-lg'
                placeholder='Ingresa tu password'
              />
            </div>

            <div className='d-flex flex-column mt-4'>
              <button
                type='submit'
                className='btn btn-primary'
                disabled={!login.email || !login.passw}
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
