// UpperCamelCase
import './NavBar.scss'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        // Fragment
        <div className='navbar-primary'>
            <img src="/assets/logo.svg" alt="logo adidas" />
            <ul>
                <Link to="/"><li><button>Inicio</button></li></Link>
                <Link to="/productos"><li><button>Productos</button></li></Link>
                <Link to=""><li><button>About Us</button></li></Link>
                <Link to="/contacto"><li><button>Contacto</button></li></Link>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar