import{NavLink} from 'react-router-dom';
const Navbar = ({ cart }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <NavLink className="navbar-brand fw-bold"  to="/">
               NovaCart
            </NavLink>

            <button 
             className="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarNav">
             <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <NavLink className='nav-link' to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                  <NavLink className="nav-link" to="/products">Products</NavLink>
                     </li>
                 <li className="nav-item">
                    <NavLink className="nav-link" to="/cart">
                      🛒 Cart ({cart.length})
                    </NavLink>
                   </li>
                    </ul>
            </div>
            </div>
    </nav>
  )
}

export default Navbar