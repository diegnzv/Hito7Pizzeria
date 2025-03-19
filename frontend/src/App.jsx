import { BrowserRouter } from 'react-router-dom'
import { MiNavbar, Footer } from './components/index'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AppRoutes from './routes/AppRoutes'
import AppProviders from './store/AppProviders'

const App = () => {
  return (
    <BrowserRouter>
      <AppProviders>
        <MiNavbar />
        <AppRoutes />
        <ToastContainer />
        <Footer />
      </AppProviders>
    </BrowserRouter>
  )
}

export default App
