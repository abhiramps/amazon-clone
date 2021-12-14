import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Home.scss'

import amazon_banner1 from '../../Images/amazon_banner.jpg'

import Products from '../Products/Products'
import Data from '../../Apis/Data'


const Home = () => {

    const items=(item)=>{
        // console.log("rentered")
        return(
            <Col sm={6} md={4} lg={3}  className='col-12' key={item.prodId.toString()}>
                <Products  ProdId={item.prodId} ProductsName={item.product_name} 
                    Company={item.company} Category={item.category} Price={item.price} 
                    Rating={item.rating} Image={item.imgUrl} 
                />
            </Col>
        )
    }

    return (
        <div className='home z-index-1'>
                <img src={amazon_banner1} className='bannerimg' alt='amazon banner'/>
            <Container  className='position-relative'>
                <Row className='row1'>
                    {
                        Data.map(items)
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Home
