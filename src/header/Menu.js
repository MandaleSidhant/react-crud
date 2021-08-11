import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu(props) {
    return(
        <nav className=" navbar-expand-md navbar-dark bg-warning">
            <div className="container"></div>
            <Link to={'/'} className="navbar-brand">React-crud</Link>

            <button className="navbar-toggler" data-bs-target="#menu" data-bs-toggle="collapse">
                <span className="navber-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={'/home'} className="nav-link">Home</Link>
                    </li>

                    <li className="nav-item ">
                        <Link to={'/create'} className="nav-link">Create</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
    
}