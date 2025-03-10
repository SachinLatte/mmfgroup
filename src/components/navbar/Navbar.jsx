import './Navbar.css'
import { IoLogoReact } from "react-icons/io5";
const Navbar = ()=>{
  return <div className="main-header">
            <div className="custom-container">
                <nav className="navbar navbar-expand-lg navbar-light sticky-top p-0">
                      <a href="javascript:void(0)" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                          <h2 className="m-0 text-primary"><IoLogoReact /></h2>
                      </a>
                      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarCollapse">
                          <div className="navbar-nav ms-auto p-4 p-lg-0">
                              <a href="#" className="nav-item nav-link">Home</a>
                              <a href="#" className="nav-item nav-link">Who We Are</a>
                              <a href="#" className="nav-item nav-link">Brands</a>
                              <a href="#" className="nav-item nav-link">Directors</a>
                              <a href="#" className="nav-item nav-link">Network</a>
                              <a href="#" className="nav-item nav-link">Contact Us</a>
                          </div>
                      </div>
                  </nav>
              </div>
          </div>
}
export default Navbar;