import HomePizzasProvider from '../store/HomePizzasContext'
import CartProvider from '../store/CartContext'
import UserProvider from '../store/UserContext'

const AppProviders = ({ children }) => {
  return (
    <HomePizzasProvider>
      <CartProvider>
        <UserProvider>{children}</UserProvider>
      </CartProvider>
    </HomePizzasProvider>
  )
}

export default AppProviders