import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from '../components/index'
import { Home, Register, Login, Cart, Pizza, Profile, NotFound, Logout } from '../pages/index'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/pizza/:id' element={<Pizza />} />
      <Route
        path='/profile'
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path='/logout' element={<Logout />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes