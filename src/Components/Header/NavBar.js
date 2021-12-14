import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

import amazon_logo from '../../Images/amazon_logo.png';

import { AmazonContext } from '../../contexts/Context';
import './Header.scss'
import SignIn from '../signin/SignIn';
// import SearchBar from './SearchBar';
import ComboBox from './Combobox';

const NavBar = () => {

    const { cartItems } = useContext(AmazonContext);

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-amazonBlack sticky-top">
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand" >
                        <img src={amazon_logo} className='header-logo text-white' alt='amazon logo' />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form className="d-flex me-auto">
                            {/* <SearchBar styles='searchbar'/> */}
                            <ComboBox/>
                            <SearchIcon className='head-searchicon fs-3 rounded-end border-none' />
                            {/* <input className="searchbar form-control  py-0 my-0 rounded-0 rounded-start"  type="search" placeholder="Search" aria-label="Search" /> */}
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        </form>

                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item ps-md-1 px-lg-2 px-xl-3 ">
                                <div className="nav-link" >
                                    <SignIn/>
                                </div>
                            </li>
                            <li className="nav-item px-lg-2 px-xl-3">
                                <NavLink to='/returns' className="nav-link d-flex flex-column align-items-center text-decoration-none text-white" >
                                    <span className='header-option-lineOne fw-light'>returns </span>
                                    <span className='header-option-lineTwo fs-5 fw-bold'>& orders</span>
                                </NavLink>
                            </li>
                            <li className="nav-item px-lg-2 px-xl-3">
                                <NavLink to='/prime' className="nav-link d-flex flex-column align-items-center text-decoration-none text-white" >
                                    <span className='header-option-lineOne fw-light'>Your</span>
                                    <span className='header-option-lineTwo fs-5 fw-bold'>Prime</span>
                                </NavLink>
                            </li>
                            <li className='nav-item px-lg-2 px-xl-3 d-flex flex-column align-items-center justify-content-center'>
                                <NavLink to='/cart' className='text-decoration-none text-white ' >
                                    <ShoppingCartIcon />
                                    <span className=''>{cartItems.length}</span>
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
