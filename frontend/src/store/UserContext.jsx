import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token') || null)
  const navigate = useNavigate()

  useEffect(() => {
    token ? localStorage.setItem('token', token) : localStorage.removeItem('token')
  }, [token])

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password })

      setToken(response.data.token)
      setUser(response.data.user)

      localStorage.setItem('token', response.data.token)

      Swal.fire({
        title: '¡Bienvenido!',
        text: 'Has iniciado sesión exitosamente.',
        icon: 'success'
      })

      navigate('/')
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Credenciales incorrectas o error en el server.',
        icon: 'error'
      })
    }
  }

  const logout = () => {
    setToken(null)
    setUser(null)
    localStorage.removeItem('token')

    Swal.fire({
      title: 'Sesión cerrada',
      text: 'Has cerrado sesión exitosamente.',
      icon: 'info'
    })
    navigate('/')
  }

  const profile = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
      setUser(response.data)
    } catch (error) {
      console.error('Error al obtener el perfil:', error)
      logout()
    }
  }

  const register = async (email, password) => {
    try {
      const URL = 'http://localhost:5000/api/auth/register'
      const payload = { email, password }

      const response = await axios.post(URL, payload)

      setUser({ email })
      setToken(response.data.token)

      localStorage.setItem('token', response.data.token)

      Swal.fire({
        title: '¡Registro exitoso!',
        text: 'Tu cuenta ha sido creada exitosamente.',
        icon: 'success'
      })

      navigate('/')
    } catch (error) {
      setToken(null)
      setUser(null)

      Swal.fire({
        title: 'Error!',
        text: 'No se pudo registrar el usuario.',
        icon: 'error'
      })
    }
  }

  const stateGlobal = { user, token, login, logout, register, profile }

  return (
    <UserContext.Provider value={stateGlobal}> {children}</UserContext.Provider>
  )
}

export default UserProvider