// import React, { useContext } from 'react'

// import './Header.scss'

// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // import { Link } from 'react-';
// import amazon_logo from '../../Images/amazon_logo.png';
// import { AmazonContext } from '../../contexts/Context';
// import { Link } from 'react-router-dom';
// import SignIn from '../signin/SignIn';

// const Header = () => {
//     const { cartItems } = useContext(AmazonContext);

//     return (
//         <div className='header sticky-top bg-amazonBlack text-white d-flex align-items-center'>
//             <Link  to='/' className='header-image text-white text-decoration-none'>
//                 <img src={amazon_logo} className='header-logo text-white' alt='amazon logo'/>
//             </Link>

//             <div className='header-search me-auto d-flex flex-row align-items-center'>
//                 <input type='text' className='header-searchinput rounded-start'/>
//                 <SearchIcon className='head-searchicon rounded-end border-none'/>
//             </div>
          
//             <div className='header-nav px-3'>
//                 <div className='header-options d-flex flex-column align-items-center '>
//                     <span className='header-option-lineOne fw-light'>Hello Guest</span>
//                     <span className='header-option-lineTwo fs-5 fw-bold'>sign in</span>
//                 </div>
//             </div>

//             <div className='header-nav px-3'>
//                 <div className='header-options d-flex flex-column align-items-center'>
//                     <span className='header-option-lineOne fw-light'>returns </span>
//                     <span className='header-option-lineTwo fs-5 fw-bold'>& orders</span>
//                 </div>
//             </div>

//             <div className='header-nav  px-3'>
//                 <div className='header-options d-flex flex-column align-items-center'>
//                     <span className='header-option-lineOne fw-light'>Your</span>
//                     <span className='header-option-lineTwo fs-5 fw-bold'>Prime</span>
//                 </div>
//             </div>
//             <div className='cart-icon pe-3'>
//                 <Link to='/cart' className='text-decoration-none text-white ' >
//                     <ShoppingCartIcon/>
//                 </Link>  
//                 <span className='header-optioLinetwo header-basket-count'>{cartItems.length}</span>
//             </div>
//         </div>
//     )
// }

// export default Header
