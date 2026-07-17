import { useState } from 'react';
import{NavLink ,useNavigate} from 'react-router-dom';
const Navbar = ({ cart }) => {
  const [search ,setSearch] =useState("");
  const navigate =useNavigate();
  const handleSearch=(e) =>{
    e.preventDefault();
    navigate(`/search?query=${search}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <NavLink className="navbar-brand fw-bold"  to="/">
               NovaCart
            </NavLink>
             <form className='d-flex mx-3' onSubmit={handleSearch}>
              <input className='form-control me-2'
              type='search'
              placeholder="Search products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              />
              <button className='btn btn-outline-primary' type="submit">Search</button>
             
             </form>
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