import React, { useContext } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { AmazonContext } from '../../contexts/Context'
import Products from '../Products/Products'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

import './Cart.scss';

import { delItem } from '../../contexts/actions';

const Cart = () => {

    const { cartItems , dispatch} = useContext(AmazonContext)

    const emptyCart = () => {
        return (
            <>
                <div className='text-uppercase fs-3 fw-bold mt-5'> your cart is empty</div>
            </>
        )
    }

    const cartItemList = (item) => {
        return (
            <Col sm={6} md={4}  lg={3} className='col-12' key={item.prodId.toString()}>
                <div className='overlay'>
                    <Icon icon="twemoji:multiply" className='icon fs-5' onClick={() =>dispatch(delItem(item))}/>
                </div>
                <Products func={true} ProdId={item.prodId} ProductsName={item.product_name} Company={item.company} Category={item.category} Price={item.price} Rating={item.rating} Image={item.imgUrl} />
            </Col>
        )
    }

    const proceedToCheckout = () => {
        return (
            <Link to='/checkout'>
                <Button className='btn btn-primary '>proceed to Checkout</Button>
            </Link>
        )
    }

    return (
        <div>
            <Container  >
                <Row className='Checkout'>
                    <Col sm={12} md={10}  lg={10}  xl={10}  className='col-12'>
                        <Row>
                            {cartItems.length === 0 && emptyCart()}
                            {cartItems.length !== 0 && cartItems.map(cartItemList)}
                        </Row>

                    </Col>
                    <Col sm={12} md={2}  lg={2}  xl={2} className='col-12'>
                        <div className='d-flex align-items-center justify-content-center '>
                            {cartItems.length !== 0 && proceedToCheckout()}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cart
