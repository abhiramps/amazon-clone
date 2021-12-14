import React, { useContext, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Data from '../../Apis/Data';
import { AmazonContext } from '../../contexts/Context';

import './Details.scss'

import { addToCart,delItem } from '../../contexts/actions'

const Details = () => {

    const [cartItemBtnState, setcartItemBtnState] = useState(true)

    const { dispatch } = useContext(AmazonContext);

    const { ProdId } = useParams();
    
    const proDetail = Data.filter(x=>x.prodId === Number(ProdId))
    const product = proDetail[0];
    // console.log(proDetail);


    const btnChange = (product) => {
        // console.log('details rentered')
        if (cartItemBtnState) {
            dispatch(addToCart(product))
            setcartItemBtnState(!cartItemBtnState)
            alert('item added to cart')
        }
        else {
            dispatch(delItem(product))
            setcartItemBtnState(!cartItemBtnState)
            alert('item removed from the cart')
        }
    }

    return (
        <div>
            <Container>
                <Row className='product-row'>
                    <Col md={6} className='col-12'>
                        <img src={product.imgUrl} alt='product img' className='prod-img ' />

                    </Col>
                    <Col md={6} className='col-12'>
                        <div className='lh-sm product-details '>
                            <div className='fs-4 fw-normal text-gray-800 py-2'>{product.product_name}</div>
                            <div className='fw-lighter py-2'>{product.company}</div>
                            <div className='py-1 text-gray-700 fs-6 me-2'>Rating : {
                                Array(product.rating).fill().map((_,i)=>(
                                    <span className='px-1'>🌟</span>
                                ))
                            }</div>
                            <div className='fs-5 fw-normal text-danger'><span className='text-gray-600 fs-6 me-2'>Price :</span>AED {product.price}</div>
                            
                            {/* button */}
                            <div className='d-flex py-4'>
                                <Button className={`btn ${cartItemBtnState ? 'btn-warning text-black' : 'btn-danger text-white'}  px-5 py-2  text-uppercase rounded-pill`}
                                    onClick={() => btnChange(product)}
                                >
                                    {cartItemBtnState ? 'add to cart' : 'remove from cart'}
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>    
        </div>
    )
}

export default Details
