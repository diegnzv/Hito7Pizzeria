import imgheader from '../assets/Header.jpg'

const Header = () => {
  return (
    <div className='position-relative header d-flex flex-column justify-content-center' style={{ height: '30vh', width: '100vw', background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8))' }}>
      <img src={imgheader} alt='Header' className='img-fluid w-100' style={{ height: '100%', objectFit: 'cover', opacity: '0.7' }} />

      <div className='position-absolute d-flex flex-column justify-content-center align-items-center text-white text-center' style={{ width: '100%', height: '100%' }}>
        <h1 className='fw-bold'>¡Pizzería Mamma Mia!</h1>
        <p className='fs-5'>¡Tenemos las mejores pizzas que podrás encontrar! </p>
        <hr className='w-75 mx-auto border-2' />
      </div>

    </div>
  )
}

export default Header