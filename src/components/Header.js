import React from 'react'
// import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a class="navbar-brand" href="#">
                    <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Logo" width="40" height="32" class="d-inline-block align-text-top me-2" />
                    LMS
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" to="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Teachers</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                Dropdown link
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header