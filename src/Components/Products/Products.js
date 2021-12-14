import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import './Products.scss'
const Products = ({ ProdId, ProductsName, Company, Category, Price, Image, Rating, func }) => {


    const [ItemCount, setItemCount] = useState(0);

    const noOfItems = () => {
        return (
            <>
                <div className='w-100 border d-flex align-items-center'>
                    <button className='btn btn-outline-warning rounded-0 px-4' onClick={() => setItemCount(itm => itm + 1)}>+</button>
                    <span className='btn btn-warning  rounded-0 px-4'>{ItemCount}</span>
                    <button className='btn btn-outline-warning  rounded-0 px-4' onClick={() => setItemCount(itm => itm - 1)}>-</button>
                </div>
            </>
        )
    }

    const buyNowBtn = () => {
        return (
            <>
                {/* <Link to={`/details/${ProdId}`}> */}
                <Button className="btn btn-warning px-5 py-2 text-gray-700 text-uppercase rounded-pill me-2">
                    buy now
                </Button>
                {/* </Link> */}
            </>
        )
    }

    return (

        <Link to={`/details/${ProdId}`}
            className='products text-decoration-none text-black d-flex flex-column align-items-center justify-content-center py-3 my-3 border border-2 rounded-3'>

            <img src={Image} className='prodImg img-thumbnail w-50' alt='banner' />

            <div className='product-caption d-flex flex-column align-items-center ' >
                <p className='product-name fs-6 fw-normal text-start text-wrap'>{ProductsName}</p>
                <small className='fw-light'>{Company}</small>
                <div>
                    <span className='fw-normal text-danger me-2'>AED</span>
                    <span className='fw-normal text-danger'>{Price}</span>
                </div>
                <div className='py-2'> Rating :{
                    Array(Rating).fill().map((_, i) => (
                        <span>🌟</span>
                    ))
                }</div>

                {func ? noOfItems() : buyNowBtn()}
            </div>
        </Link>
    )
}

export default Products
