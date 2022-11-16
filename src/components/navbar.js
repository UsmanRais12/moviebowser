// import App from "../App"
import React from 'react';
import {useNavigate , Link} from 'react-router-dom';
import SearchView from './SearchView';


const Navbar = ({searchText,setSearchText}) => {
  const navigate = useNavigate();
  const updateSearchText = (e) =>{
    navigate('/search')
    setSearchText(e.target.value)
  }
    return(
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to="/">Movie Browser </Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">Disabled</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText}
          onChange={updateSearchText}/>
          <button className="btn btn-outline-success" type="submit"  onClick= {(e) => {
                  e.preventDefault();
                  try{
                    updateSearchText({searchText}.target.value)
                  }
                  catch (TypeError){
                    console.error(TypeError);
                  }
                }}>Search</button>
        </form>
      </div>
    </div>
  </nav>
      </div>
    )
  }
  export default Navbar;
