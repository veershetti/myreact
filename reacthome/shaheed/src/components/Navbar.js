import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {


  return (
    <>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossOrigin="anonymous"></script>

        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
       

  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Inventory
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><NavLink className="dropdown-item" to="/Inventory">Inventory Details</NavLink></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Distributors
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><NavLink className="dropdown-item" to="/Distributor">Distributor Details</NavLink></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
      <li className="nav-item">
        <a className="nav-link " href="#">RequestMedicine</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </>
  )
}

export default Navbar