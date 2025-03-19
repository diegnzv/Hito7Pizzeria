import { formateaNumero } from '../utils/utiles.js'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../store/CartContext.jsx'
import { UserContext } from '../store/UserContext.jsx'

const MiNavbar = () => {
  const { total } = useContext(CartContext)
  const { token } = useContext(UserContext)

  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#'>Pizzería Mamma Mia!</Navbar.Brand>

        <Navbar.Toggle aria-controls='navbarNav' />
        <Navbar.Collapse id='navbarNav'>
          <Nav className='me-auto d-flex gap-2'>
            <Link to='/' className='text-decoration-none ms-3 text-white'>
              <Button variant='dark' className='btn btn-dark btn-outline-light btn-sm'>🍕Home</Button>
            </Link>
            {token
              ? (
                <>
                  <Link to='/profile' className='text-decoration-none ms-3 text-white'>
                    <Button variant='dark' className='btn btn-dark btn-outline-light btn-sm'>🔓Profile</Button>
                  </Link>
                  <Link to='/logout' className='text-decoration-none ms-3 text-white'>
                    <Button variant='dark' className='btn btn-dark btn-outline-light btn-sm'>🔓Logout</Button>
                  </Link>
                </>
                )
              : (
                <>
                  <Link to='/login' className='text-decoration-none ms-3 text-white'>
                    <Button variant='dark' className='btn btn-dark btn-outline-light btn-sm'>Login</Button>
                  </Link>
                  <Link to='/register' className='text-decoration-none ms-3 text-white'>
                    <Button variant='dark' className='btn btn-dark btn-outline-light btn-sm'>🔐Register</Button>
                  </Link>
                </>
                )}
          </Nav>

          <Nav>
            <Link to='/cart' className='text-decoration-none ms-3 text-white'>
              <Button variant='dark' className='btn btn-outline-warning fw-bold text-primary btn-sm'>
                🛒 Total: ${formateaNumero(total)}<span className='badge bd-warning' />
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MiNavbar
