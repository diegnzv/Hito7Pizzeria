import { Link } from 'react-router-dom'
import notFoundImage from '../assets/error-404.jpg'

const NotFound = () => {
  return (
    <main className='container text-center mt-5 mb-5'>
      <img src={notFoundImage} alt='Pagina no encontrada' className='img-fluid w-50' />
      <br /><br />
      <h2 className='text-muted'>Oops! Página no encontrada</h2>
      <br />
      <p className='text-muted'>Parece que la página que buscas no existe.</p>
      <br />
      <Link to='/' className='btn btn-primary mt-3'>
        Volver al Home
      </Link>
    </main>
  )
}
export default NotFound
