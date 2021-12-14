import React from 'react'
import './Checkout.scss'
const Checkout = () => {
    return (
        <>
            {/* MODALS  */}
            {/* Newsletter: Horizontal  */}
            <div className="modal fade" id="modalNewsletterHorizontal" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">

                        {/* Close  */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true"></i>
                        </button>

                        {/* Content  */}
                        <div className="row no-gutters">
                            <div className="col-12 col-lg-5">

                                {/* Image  */}
                                <img className="img-fluid" src="./assets/img/covers/cover-25.jpg" alt="..." />

                            </div>
                            <div className="col-12 col-lg-7 d-flex flex-column px-md-8">

                                {/* Body  */}
                                <div className="modal-body my-auto py-10">

                                    {/* Heading  */}
                                    <h4>Subscribe to Newsletter and get 15% Discount</h4>

                                    {/* Text  */}
                                    <p className="mb-7 font-size-lg">
                                        On your next purchase
                                    </p>

                                    {/* Form  */}
                                    <form>
                                        <div className="form-row">
                                            <div className="col">

                                                {/* Input  */}
                                                <label className="sr-only" for="modalNewsletterHorizontalEmail">Enter Email *</label>
                                                <input className="form-control form-control-sm" id="modalNewsletterHorizontalEmail" type="email" placeholder="Enter Email *" />

                                            </div>
                                            <div className="col-auto">

                                                {/* Button  */}
                                                <button className="btn btn-sm btn-dark" type="submit">
                                                    <i className="fe fe-send"></i>
                                                </button>

                                            </div>
                                        </div>
                                    </form>

                                </div>

                                {/* Footer  */}
                                <div className="modal-footer pt-0">

                                    {/* Checkbox  */}
                                    <div className="custom-control custom-checkbox">

                                        {/* Input  */}
                                        <input className="custom-control-input" id="modalNewsletterHorizontalCheckbox" type="checkbox" />

                                        {/* Label  */}
                                        <label className="custom-control-label font-size-xs" for="modalNewsletterHorizontalCheckbox">
                                            Prevent this Pop-up
                                        </label>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>


            {/* Newsletter: Vertical  */}
            <div className="modal fade" id="modalNewsletterVertical" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">

                        {/* Close  */}
                        <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true"></i>
                        </button>

                        {/* Body  */}
                        <div className="modal-body mt-2 mr-2 ml-2 py-10 bg-cover text-center text-white" style={{ background: " url(./assets/img/covers/cover-26.jpg);" }}>

                            {/* Heading  */}
                            <h4>Subscribe to Newsletter and get 15% Discount</h4>

                            {/* Text  */}
                            <p className="mb-0 font-size-lg">
                                On your next purchase
                            </p>

                        </div>

                        {/* Body  */}
                        <div className="modal-body py-9">

                            {/* Form  */}
                            <form>
                                <div className="form-row">
                                    <div className="col">

                                        {/* Input  */}
                                        <label className="sr-only" for="modalNewsletterVerticalEmail">Enter Email *</label>
                                        <input className="form-control form-control-sm" id="modalNewsletterVerticalEmail" type="email" placeholder="Enter Email *" />

                                    </div>
                                    <div className="col-auto">

                                        {/* Button  */}
                                        <button className="btn btn-sm btn-dark" type="submit">
                                            Subscribe
                                        </button>

                                    </div>
                                </div>
                            </form>

                        </div>

                        {/* Footer  */}
                        <div className="modal-footer justify-content-center pt-0">

                            {/* Checkbox  */}
                            <div className="custom-control custom-checkbox">

                                {/* Input  */}
                                <input className="custom-control-input" id="modalNewsletterVerticalCheckbox" type="checkbox" />

                                {/* Label  */}
                                <label className="custom-control-label font-size-xs" for="modalNewsletterVerticalCheckbox">
                                    Prevent this Pop-up
                                </label>

                            </div>

                        </div>

                    </div>

                </div>
            </div>


            {/* Password Reset  */}
            <div className="modal fade" id="modalPasswordReset" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">

                        {/* Close  */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true"></i>
                        </button>

                        {/* Header */}
                        <div className="modal-header line-height-fixed font-size-lg">
                            <strong className="mx-auto">Forgot Password?</strong>
                        </div>

                        {/* Body  */}
                        <div className="modal-body text-center">

                            {/* Text  */}
                            <p className="mb-7 font-size-sm text-gray-500">
                                Please enter your Email Address. You will receive a link
                                to create a new password via Email.
                            </p>

                            {/* Form  */}
                            <form>

                                {/* Email  */}
                                <div className="form-group">
                                    <label className="sr-only" for="modalPasswordResetEmail">
                                        Email Address *
                                    </label>
                                    <input className="form-control form-control-sm" id="modalPasswordResetEmail" type="email" placeholder="Email Address *" required="" />
                                </div>

                                {/* Button  */}
                                <button className="btn btn-sm btn-dark">
                                    Reset Password
                                </button>

                            </form>

                        </div>

                    </div>

                </div>
            </div>


            {/* Product  */}
            <div className="modal fade" id="modalProduct" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">

                        {/* Close  */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true"></i>
                        </button>

                        {/* Content  */}
                        <div className="container-fluid px-xl-0">
                            <div className="row align-items-center mx-xl-0">
                                <div className="col-12 col-lg-6 col-xl-5 py-4 py-xl-0 px-xl-0">

                                    {/* Image  */}
                                    <img className="img-fluid" src="./assets/img/products/product-7.jpg" alt="..." />

                                    {/* Button  */}
                                    <a className="btn btn-sm btn-block btn-primary" href="./product.html">
                                        More Product Info <i className="fe fe-info ml-2"></i>
                                    </a>

                                </div>
                                <div className="col-12 col-lg-6 col-xl-7 py-9 px-md-9">

                                    {/* Heading  */}
                                    <h4 className="mb-3">Leather Sneakers</h4>

                                    {/* Price  */}
                                    <div className="mb-7">
                                        <span className="h5">$85.00</span>
                                        <span className="font-size-sm">(In Stock)</span>
                                    </div>

                                    {/* Form  */}
                                    <form>
                                        <div className="form-group">

                                            {/* Label  */}
                                            <p>
                                                Color: <strong id="modalProductColorCaption">White</strong>
                                            </p>

                                            {/* Radio  */}
                                            <div className="mb-8 ml-n1">
                                                <div className="custom-control custom-control-inline custom-control-img">
                                                    <input type="radio" className="custom-control-input" id="modalProductColorOne" name="modalProductColor" data-toggle="form-caption" data-target="#modalProductColorCaption" value="White" checked="" />
                                                    <label className="custom-control-label" for="modalProductColorOne">
                                                        <span className="embed-responsive embed-responsive-1by1 bg-cover" style={{ background: "url(./assets/img/products/product-7.jpg);" }}></span>
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-control-inline custom-control-img">
                                                    <input type="radio" className="custom-control-input" id="modalProductColorTwo" name="modalProductColor" data-toggle="form-caption" data-target="#modalProductColorCaption" value="Black" />
                                                    <label className="custom-control-label" for="modalProductColorTwo">
                                                        <span className="embed-responsive embed-responsive-1by1 bg-cover" style={{ background: "url(./assets/img/products/product-49.jpg);" }}></span>
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="form-group">

                                            {/* Label  */}
                                            <p>
                                                Size: <strong><span id="modalProductSizeCaption">7.5</span> US</strong>
                                            </p>

                                            {/* Radio  */}
                                            <div className="mb-2">
                                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                    <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeOne" value="6" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="custom-control-label" for="modalProductSizeOne">6</label>
                                                </div>
                                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                    <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeTwo" value="6.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" disabled="" />
                                                    <label className="custom-control-label" for="modalProductSizeTwo">6.5</label>
                                                </div>
                                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                    <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeThree" value="7" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="custom-control-label" for="modalProductSizeThree">7</label>
                                                </div>
                                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                    <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeFour" value="7.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" checked="" />
                                                    <label className="custom-control-label" for="modalProductSizeFour">7.5</label>
                                                </div>
                                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                    <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeFive" value="8" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="custom-control-label" for="modalProductSizeFive">8</label>
                                                </div>
                                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                    <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeSix" value="8.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="custom-control-label" for="modalProductSizeSix">8.5</label>
                                                </div>
                                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                    <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeSeven" value="9" data-toggle="form-caption" data-target="#modalProductSizeCaption" disabled="" />
                                                    <label className="custom-control-label" for="modalProductSizeSeven">9</label>
                                                </div>
                                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                    <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeEight" value="9.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" disabled="" />
                                                    <label className="custom-control-label" for="modalProductSizeEight">9.5</label>
                                                </div>
                                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                    <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeNine" value="10" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="custom-control-label" for="modalProductSizeNine">10</label>
                                                </div>
                                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                    <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeTen" value="10.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="custom-control-label" for="modalProductSizeTen">10.5</label>
                                                </div>
                                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                    <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeEleven" value="11" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="custom-control-label" for="modalProductSizeEleven">11</label>
                                                </div>
                                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                    <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeTwelve" value="12" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="custom-control-label" for="modalProductSizeTwelve">12</label>
                                                </div>
                                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                    <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeThirteen" value="13" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="custom-control-label" for="modalProductSizeThirteen">13</label>
                                                </div>
                                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                    <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeFourteen" value="14" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="custom-control-label" for="modalProductSizeFourteen">14</label>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="form-group mb-0">
                                            <div className="form-row">
                                                <div className="col-12 col-lg-auto">

                                                    {/* Quantity  */}
                                                    <select className="custom-select mb-2">
                                                        <option value="1" selected="">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>

                                                </div>
                                                <div className="col-12 col-lg">

                                                    {/* Submit  */}
                                                    <button type="submit" className="btn btn-block btn-dark mb-2">
                                                        Add to Cart <i className="fe fe-shopping-cart ml-2"></i>
                                                    </button>

                                                </div>
                                                <div className="col-12 col-lg-auto">

                                                    {/* Wishlist  */}
                                                    <button className="btn btn-outline-dark btn-block mb-2" data-toggle="button">
                                                        Wishlist <i className="fe fe-heart ml-2"></i>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* Search  */}
            <div className="modal fixed-right fade" id="modalSearch" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-vertical" role="document">
                    <div className="modal-content">

                        {/* Close  */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true"></i>
                        </button>

                        {/* Header */}
                        <div className="modal-header line-height-fixed font-size-lg">
                            <strong className="mx-auto">Search Products</strong>
                        </div>

                        {/* Body: Form  */}
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label className="sr-only" for="modalSearchCategories">Categories:</label>
                                    <select className="custom-select" id="modalSearchCategories">
                                        <option selected="">All Categories</option>
                                        <option>Women</option>
                                        <option>Men</option>
                                        <option>Kids</option>
                                    </select>
                                </div>
                                <div className="input-group input-group-merge">
                                    <input className="form-control" type="search" placeholder="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-border" type="submit">
                                            <i className="fe fe-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Body: Results (add `.d-none` to disable it)  */}
                        <div className="modal-body border-top font-size-sm">

                            {/* Heading  */}
                            <p>Search Results:</p>

                            {/* Items  */}
                            <div className="row align-items-center position-relative mb-5">
                                <div className="col-4 col-md-3">

                                    {/* Image  */}
                                    <img className="img-fluid" src="./assets/img/products/product-5.jpg" alt="..." />

                                </div>
                                <div className="col position-static">

                                    {/* Text  */}
                                    <p className="mb-0 font-weight-bold">
                                        <a className="stretched-link text-body" href="./product.html">Leather mid-heel Sandals</a> <br />
                                        <span className="text-muted">$129.00</span>
                                    </p>

                                </div>
                            </div>
                            <div className="row align-items-center position-relative mb-5">
                                <div className="col-4 col-md-3">

                                    {/* Image  */}
                                    <img className="img-fluid" src="./assets/img/products/product-6.jpg" alt="..." />

                                </div>
                                <div className="col position-static">

                                    {/* Text  */}
                                    <p className="mb-0 font-weight-bold">
                                        <a className="stretched-link text-body" href="./product.html">Cotton floral print Dress</a> <br />
                                        <span className="text-muted">$40.00</span>
                                    </p>

                                </div>
                            </div>
                            <div className="row align-items-center position-relative mb-5">
                                <div className="col-4 col-md-3">

                                    {/* Image  */}
                                    <img className="img-fluid" src="./assets/img/products/product-7.jpg" alt="..." />

                                </div>
                                <div className="col position-static">

                                    {/* Text  */}
                                    <p className="mb-0 font-weight-bold">
                                        <a className="stretched-link text-body" href="./product.html">Leather Sneakers</a> <br />
                                        <span className="text-primary">$85.00</span>
                                    </p>

                                </div>
                            </div>
                            <div className="row align-items-center position-relative mb-5">
                                <div className="col-4 col-md-3">

                                    {/* Image  */}
                                    <img className="img-fluid" src="./assets/img/products/product-8.jpg" alt="..." />

                                </div>
                                <div className="col position-static">

                                    {/* Text  */}
                                    <p className="mb-0 font-weight-bold">
                                        <a className="stretched-link text-body" href="./product.html">Cropped cotton Top</a> <br />
                                        <span className="text-muted">$29.00</span>
                                    </p>

                                </div>
                            </div>
                            <div className="row align-items-center position-relative mb-5">
                                <div className="col-4 col-md-3">

                                    {/* Image  */}
                                    <img className="img-fluid" src="./assets/img/products/product-9.jpg" alt="..." />

                                </div>
                                <div className="col position-static">

                                    {/* Text  */}
                                    <p className="mb-0 font-weight-bold">
                                        <a className="stretched-link text-body" href="./product.html">Floral print midi Dress</a> <br />
                                        <span className="text-muted">$50.00</span>
                                    </p>

                                </div>
                            </div>

                            {/* Button  */}
                            <a className="btn btn-link px-0 text-reset" href="./shop.html">
                                View All <i className="fe fe-arrow-right ml-2"></i>
                            </a>

                        </div>

                        {/* Body: Empty (remove `.d-none` to disable it)  */}
                        <div className="d-none modal-body">

                            {/* Text  */}
                            <p className="mb-3 font-size-sm text-center">
                                Nothing matches your search
                            </p>
                            <p className="mb-0 font-size-sm text-center">
                                😞
                            </p>

                        </div>

                    </div>
                </div>
            </div>


            {/* Shopping Cart  */}
            <div className="modal fixed-right fade" id="modalShoppingCart" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-vertical" role="document">

                    {/* Full cart (add `.d-none` to disable it)  */}
                    <div className="modal-content">

                        {/* Close  */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true"></i>
                        </button>

                        {/* Header */}
                        <div className="modal-header line-height-fixed font-size-lg">
                            <strong className="mx-auto">Your Cart (2)</strong>
                        </div>

                        {/* List group  */}
                        <ul className="list-group list-group-lg list-group-flush">
                            <li className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col-4">

                                        {/* Image  */}
                                        <a href="./product.html">
                                            <img className="img-fluid" src="./assets/img/products/product-6.jpg" alt="..." />
                                        </a>

                                    </div>
                                    <div className="col-8">

                                        {/* Title  */}
                                        <p className="font-size-sm font-weight-bold mb-6">
                                            <a className="text-body" href="./product.html">Cotton floral print Dress</a> <br />
                                            <span className="text-muted">$40.00</span>
                                        </p>

                                        {/*Footer  */}
                                        <div className="d-flex align-items-center">

                                            {/* Select  */}
                                            <select className="custom-select custom-select-xxs w-auto">
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                                <option value="1">3</option>
                                            </select>

                                            {/* Remove  */}
                                            <a className="font-size-xs text-gray-400 ml-auto" href="#!">
                                                <i className="fe fe-x"></i> Remove
                                            </a>

                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col-4">

                                        {/* Image  */}
                                        <a href="./product.html">
                                            <img className="img-fluid" src="./assets/img/products/product-10.jpg" alt="..." />
                                        </a>

                                    </div>
                                    <div className="col-8">

                                        {/* Title  */}
                                        <p className="font-size-sm font-weight-bold mb-6">
                                            <a className="text-body" href="./product.html">Suede cross body Bag</a> <br />
                                            <span className="text-muted">$49.00</span>
                                        </p>

                                        {/*Footer  */}
                                        <div className="d-flex align-items-center">

                                            {/* Select  */}
                                            <select className="custom-select custom-select-xxs w-auto">
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                                <option value="1">3</option>
                                            </select>

                                            {/* Remove  */}
                                            <a className="font-size-xs text-gray-400 ml-auto" href="#!">
                                                <i className="fe fe-x"></i> Remove
                                            </a>

                                        </div>

                                    </div>
                                </div>
                            </li>
                        </ul>

                        {/* Footer  */}
                        <div className="modal-footer line-height-fixed font-size-sm bg-light mt-auto">
                            <strong>Subtotal</strong> <strong className="ml-auto">$89.00</strong>
                        </div>

                        {/* Buttons  */}
                        <div className="modal-body">
                            <a className="btn btn-block btn-dark" href="./checkout.html">Continue to Checkout</a>
                            <a className="btn btn-block btn-outline-dark" href="./shopping-cart.html">View Cart</a>
                        </div>

                    </div>

                    {/* Empty cart (remove `.d-none` to enable it)  */}
                    <div className="modal-content d-none">

                        {/* Close  */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true"></i>
                        </button>

                        {/* Header */}
                        <div className="modal-header line-height-fixed font-size-lg">
                            <strong className="mx-auto">Your Cart (0)</strong>
                        </div>

                        {/* Body  */}
                        <div className="modal-body flex-grow-0 my-auto">

                            {/* Heading  */}
                            <h6 className="mb-7 text-center">Your cart is empty 😞</h6>

                            {/* Button  */}
                            <a className="btn btn-block btn-outline-dark" href="#!">
                                Continue Shopping
                            </a>

                        </div>

                    </div>

                </div>
            </div>


            {/* Sidebar  */}
            <div className="modal fixed-right fade" id="modalSidebar" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-vertical" role="document">
                    <div className="modal-content">

                        {/* Close  */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true"></i>
                        </button>

                        {/* Body  */}
                        <div className="modal-body px-10 my-auto">

                            {/* Nav  */}
                            <ul className="nav nav-vertical nav-unstyled font-size-h2" id="sidebarNav">
                                <li className="nav-item">

                                    {/* Toggle  */}
                                    <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarHome">
                                        Home
                                    </a>

                                    {/* Collapse  */}
                                    <div className="collapse" id="sidebarHome" data-parent="#sidebarNav">
                                        <ul className="list-styled font-size-lg py-3 mb-0">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./index.html">Default</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./index-classic.html">Classic</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./index-fashion.html">Fashion</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./index-boxed.html">Boxed</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./index-simple.html">Simple</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./index-asymmetric.html">Asymmetric</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./index-sidenav.html">Sidenav</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./index-landing.html">Landing</a>
                                            </li>
                                        </ul>
                                    </div>

                                </li>
                                <li className="nav-item">

                                    {/* Toggle  */}
                                    <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarCatalog">
                                        Catalog
                                    </a>

                                    {/* Collapse  */}
                                    <div className="collapse" id="sidebarCatalog" data-parent="#sidebarNav">
                                        <div className="row">
                                            <div className="col-12 py-3">

                                                {/* Heading  */}
                                                <h6 className="mb-5 font-weight-bold">Clothing</h6>

                                                {/* Links  */}
                                                <ul className="list-styled font-size-lg py-3">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">All Clothing</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Blouses &amp; Shirts</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Coats &amp; Jackets</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Dresses</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Hoodies &amp; Sweats</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Denim</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Jeans</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Jumpers &amp; Cardigans</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Leggings</a>
                                                    </li>
                                                </ul>

                                            </div>
                                            <div className="col-12 py-3">

                                                {/* Heading  */}
                                                <h6 className="mb-5 font-weight-bold">Shoes &amp; Boots</h6>

                                                {/* Links  */}
                                                <ul className="list-styled font-size-lg">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">All Shoes &amp; Boots</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Branded Shoes</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Boots</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Heels</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Trainers</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Sandals</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Shoes</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Wide Fit Shoes</a>
                                                    </li>
                                                </ul>

                                            </div>
                                            <div className="col-12 py-3">

                                                {/* Heading  */}
                                                <h6 className="mb-5 font-weight-bold">Bags &amp; Accessories</h6>

                                                {/* Links  */}
                                                <ul className="list-styled font-size-lg">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">All Bags &amp; Accessories</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Accessories</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Bags &amp; Purses</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Luggage</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Belts</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Hats</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Hair Accessories</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Jewellery</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Travel Accessories</a>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>

                                </li>
                                <li className="nav-item">

                                    {/* Toggle  */}
                                    <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarShop">
                                        Shop
                                    </a>

                                    {/* Collapse  */}
                                    <div className="collapse" id="sidebarShop" data-parent="#sidebarNav">
                                        <div className="row">
                                            <div className="col-12 py-3">

                                                {/* Heading  */}
                                                <h6 className="mb-5">Shop</h6>

                                                {/* Links  */}
                                                <ul className="list-styled font-size-lg">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Default</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop-topbar.html">Topbar</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop-collapse.html">Collapse</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop-simple.html">Simple</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop-masonry.html">Masonry</a>
                                                    </li>
                                                </ul>

                                            </div>
                                            <div className="col-12 py-3">

                                                {/* Heading  */}
                                                <h6 className="mb-5">Product</h6>

                                                {/* Links  */}
                                                <ul className="list-styled font-size-lg">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./product.html">Default</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./product-images-left.html">Images Left</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./product-image-grid.html">Image Grid</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./product-image-slider.html">Image Slider</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./product-images-stacked.html">Images Stacked</a>
                                                    </li>
                                                </ul>

                                            </div>
                                            <div className="col-12 py-3">

                                                {/* Heading  */}
                                                <h6 className="mb-5">Support</h6>

                                                {/* Links  */}
                                                <ul className="list-styled font-size-lg">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shopping-cart.html">Shopping Cart</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./checkout.html">Checkout</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./order-completed.html">Order Completed</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shipping-and-returns.html">Shipping &amp; Returns</a>
                                                    </li>
                                                </ul>

                                            </div>
                                            <div className="col-12 py-3">

                                                {/* Heading  */}
                                                <h6 className="mb-5">Account</h6>

                                                {/* Links  */}
                                                <ul className="list-styled font-size-lg">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-order.html">Order</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-orders.html">Orders</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-wishlist.html">Wishlist</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-personal-info.html">Personal Info</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-address.html">Addresses</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-address-edit.html">Addresses: New</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-payment.html">Payment</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-payment-edit.html">Payment: New</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-payment-choose.html">Payment: Choose</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./auth.html">Auth</a>
                                                    </li>
                                                </ul>

                                            </div>
                                            <div className="col-12 py-3">

                                                {/* Heading  */}
                                                <h6 className="mb-5">Modals</h6>

                                                {/* Links  */}
                                                <ul className="list-styled font-size-lg">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterHorizontal">
                                                            Newsletter: Horizontal
                                                        </a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterVertical">
                                                            Newsletter: Vertical
                                                        </a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalProduct">
                                                            Product
                                                        </a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalSearch">
                                                            Search
                                                        </a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalShoppingCart">
                                                            Shopping Cart
                                                        </a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalSizeChart">
                                                            Size Chart
                                                        </a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalWaitList">
                                                            Wait List
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>

                                </li>
                                <li className="nav-item">

                                    {/* Toggle  */}
                                    <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarPages">
                                        Pages
                                    </a>

                                    {/* Collapse  */}
                                    <div className="collapse" id="sidebarPages" data-parent="#sidebarNav">
                                        <ul className="list-styled font-size-lg py-3 mb-0">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./about.html">About</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./contact-us.html">Contact Us</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./store-locator.html">Store Locator</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./faq.html">FAQ</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./coming-soon.html">Coming Soon</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./404.html">404</a>
                                            </li>
                                        </ul>
                                    </div>

                                </li>
                                <li className="nav-item">

                                    {/* Toggle  */}
                                    <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarBlog">
                                        Blog
                                    </a>

                                    {/* Collapse  */}
                                    <div className="collapse" id="sidebarBlog" data-parent="#sidebarNav">
                                        <ul className="list-styled font-size-lg py-3 mb-0">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./blog.html">Blog</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./blog-post.html">Blog Post</a>
                                            </li>
                                        </ul>
                                    </div>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./docs/getting-started.html">Docs</a>
                                </li>
                            </ul>

                        </div>

                        {/* Body  */}
                        <div className="moda-body px-10 py-9">

                            {/* Social links  */}
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="text-gray-350" href="#!">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-gray-350" href="#!">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-gray-350" href="#!">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-gray-350" href="#!">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-gray-350" href="#!">
                                        <i className="fab fa-medium-m"></i>
                                    </a>
                                </li>
                            </ul>

                            {/* Footer  */}
                            <div className="font-size-xxs text-gray-350">
                                © 2019 All rights reserved. Designed by Unvab.
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            {/* Size Chart  */}
            <div className="modal fade" id="modalSizeChart" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">

                        {/* Close  */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true"></i>
                        </button>

                        {/* Header */}
                        <div className="modal-header line-height-fixed font-size-lg">
                            <strong className="mx-auto">Size Chart</strong>
                        </div>

                        {/* Body  */}
                        <div className="modal-body border-bottom">

                            {/* Header  */}
                            <div className="d-flex mb-7">

                                {/* Heading  */}
                                <h5 className="mb-0">Clothing</h5>

                                {/* Toggles  */}
                                <div className="btn-group btn-group-toggle ml-auto" data-toggle="buttons">
                                    <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 active">
                                        <input type="radio" name="modalSizeChartUnitOne" checked="" /> IN
                                    </label>
                                    <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 ml-2">
                                        <input type="radio" name="modalSizeChartUnitOne" /> CM
                                    </label>
                                </div>

                            </div>

                            {/* Table  */}
                            <div className="table-responsive">
                                <table className="table table-bordered table-sm table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>Size</th>
                                            <th>US</th>
                                            <th>Bust</th>
                                            <th>Waist</th>
                                            <th>Hips</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>XS</td>
                                            <td>2</td>
                                            <td>32</td>
                                            <td>24 - 25</td>
                                            <td>33 - 34</td>
                                        </tr>
                                        <tr>
                                            <td>S</td>
                                            <td>4</td>
                                            <td>34 - 35</td>
                                            <td>26 - 27</td>
                                            <td>35 - 26</td>
                                        </tr>
                                        <tr>
                                            <td>M</td>
                                            <td>6</td>
                                            <td>36 - 37</td>
                                            <td>28 - 29</td>
                                            <td>38 - 40</td>
                                        </tr>
                                        <tr>
                                            <td>L</td>
                                            <td>8</td>
                                            <td>38 - 29</td>
                                            <td>30 - 31</td>
                                            <td>42 - 44</td>
                                        </tr>
                                        <tr>
                                            <td>XL</td>
                                            <td>10</td>
                                            <td>40 - 41</td>
                                            <td>32 - 33</td>
                                            <td>45 - 47</td>
                                        </tr>
                                        <tr>
                                            <td>XXL</td>
                                            <td>12</td>
                                            <td>42 - 43</td>
                                            <td>34 - 35</td>
                                            <td>48 - 50</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        {/* Body  */}
                        <div className="modal-body">

                            {/* Header  */}
                            <div className="d-flex mb-7">

                                {/* Heading  */}
                                <h5 className="mb-0">Shoes</h5>

                                {/* Toggles  */}
                                <div className="btn-group btn-group-toggle ml-auto" data-toggle="buttons">
                                    <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 active">
                                        <input type="radio" name="modalSizeCharUnitTwo" checked="" /> IN
                                    </label>
                                    <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 ml-2">
                                        <input type="radio" name="modalSizeCharUnitTwo" /> CM
                                    </label>
                                </div>

                            </div>

                            {/* Tables  */}
                            <div className="row">
                                <div className="col-12 col-lg-6">

                                    {/* Table  */}
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-sm table-hover mb-lg-0">
                                            <thead>
                                                <tr>
                                                    <th>Size</th>
                                                    <th>US</th>
                                                    <th>Foot Length</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>36</td>
                                                    <td>5</td>
                                                    <td>22.8</td>
                                                </tr>
                                                <tr>
                                                    <td>26.5</td>
                                                    <td>5.5</td>
                                                    <td>23.1</td>
                                                </tr>
                                                <tr>
                                                    <td>37</td>
                                                    <td>6</td>
                                                    <td>23.5</td>
                                                </tr>
                                                <tr>
                                                    <td>37.5</td>
                                                    <td>6.</td>
                                                    <td>23.5</td>
                                                </tr>
                                                <tr>
                                                    <td>38</td>
                                                    <td>7</td>
                                                    <td>24.1</td>
                                                </tr>
                                                <tr>
                                                    <td>38.5</td>
                                                    <td>7.5</td>
                                                    <td>24.5</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                <div className="col-12 col-lg-6">

                                    {/* Table  */}
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-sm table-hover mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Size</th>
                                                    <th>US</th>
                                                    <th>Foot Length</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>36</td>
                                                    <td>5</td>
                                                    <td>22.8</td>
                                                </tr>
                                                <tr>
                                                    <td>39</td>
                                                    <td>8</td>
                                                    <td>24.1</td>
                                                </tr>
                                                <tr>
                                                    <td>40</td>
                                                    <td>9</td>
                                                    <td>25.4</td>
                                                </tr>
                                                <tr>
                                                    <td>40.5</td>
                                                    <td>9.5</td>
                                                    <td>25.7</td>
                                                </tr>
                                                <tr>
                                                    <td>41</td>
                                                    <td>10</td>
                                                    <td>26.0</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


            {/* Wait List  */}
            <div className="modal fade" id="modalWaitList" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">

                        {/* Close  */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true"></i>
                        </button>

                        {/* Header */}
                        <div className="modal-header line-height-fixed font-size-lg">
                            <strong className="mx-auto">Wait List</strong>
                        </div>

                        {/* Body  */}
                        <div className="modal-body">
                            <div className="row mb-6">
                                <div className="col-12 col-md-3">

                                    {/* Image  */}
                                    <a href="./product.html">
                                        <img className="img-fluid mb-7 mb-md-0" src="./assets/img/products/product-6.jpg" alt="..." />
                                    </a>

                                </div>
                                <div className="col-12 col-md-9">

                                    {/* Label  */}
                                    <p>
                                        <a className="font-weight-bold text-body" href="./product.html">Cotton floral print Dress</a>
                                    </p>

                                    {/* Radio  */}
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeOne" value="6" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="custom-control-label" for="modalWaitListSizeOne">3XS</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeTwo" value="6.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="custom-control-label" for="modalWaitListSizeTwo">2XS</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeThree" value="7" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="custom-control-label" for="modalWaitListSizeThree">XS</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeFour" value="7.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" checked="" />
                                        <label className="custom-control-label" for="modalWaitListSizeFour">S</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeFive" value="8" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="custom-control-label" for="modalWaitListSizeFive">M</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeSix" value="8.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="custom-control-label" for="modalWaitListSizeSix">LG</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeSeven" value="9" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="custom-control-label" for="modalWaitListSizeSeven">XL</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeEight" value="9.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="custom-control-label" for="modalWaitListSizeEight">2XL</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeNine" value="10" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="custom-control-label" for="modalWaitListSizeNine">3XL</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeTen" value="10.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="custom-control-label" for="modalWaitListSizeTen">4XL</label>
                                    </div>

                                </div>

                            </div>
                            <div className="row">
                                <div className="col-12">

                                    {/* Text  */}
                                    <p className="font-size-sm text-center text-gray-500">
                                        Justo ut diam erat hendrerit morbi porttitor,
                                        per eu curabitur diam sociis.
                                    </p>

                                </div>
                            </div>
                            <div className="form-row mb-2">
                                <div className="col-12 col-md-6">

                                    {/* Form group  */}
                                    <div className="form-group">
                                        <label className="sr-only" for="listName">Your Name</label>
                                        <input className="form-control" id="listName" type="text" placeholder="Your Name *" required="" />
                                    </div>

                                </div>
                                <div className="col-12 col-md-6">

                                    {/* Form group  */}
                                    <div className="form-group">
                                        <label className="sr-only" for="listEmail">Your Name</label>
                                        <input className="form-control" id="listEmail" type="email" placeholder="Your Email *" required="" />
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">

                                    {/* Button  */}
                                    <button className="btn btn-dark" type="submit">Subscribe</button>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>



            {/* NAVBAR  */}



            {/* NAVBAR  */}



            {/* BREADCRUMB  */}


            {/* CONTENT  */}
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">

                            {/* Heading  */}
                            <h3 className="mb-4">Checkout</h3>

                            {/* Subheading  */}


                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-7">

                            {/* Form  */}
                            <form>

                                {/* Heading  */}
                                <h6 className="mb-7">Billing Details</h6>

                                {/* Billing details  */}
                                <div className="row mb-9">
                                    <div className="col-12 col-md-6">

                                        {/* First Name  */}
                                        <div className="form-group">
                                            <label for="checkoutBillingFirstName">First Name *</label>
                                            <input className="form-control form-control-sm" id="checkoutBillingFirstName" type="text" placeholder="First Name" required="" />
                                        </div>

                                    </div>
                                    <div className="col-12 col-md-6">

                                        {/* Last Name  */}
                                        <div className="form-group">
                                            <label for="checkoutBillingLastName">Last Name *</label>
                                            <input className="form-control form-control-sm" id="checkoutBillingLastName" type="text" placeholder="Last Name" required="" />
                                        </div>

                                    </div>
                                    <div className="col-12">

                                        {/* Email  */}
                                        <div className="form-group">
                                            <label for="checkoutBillingEmail">Email *</label>
                                            <input className="form-control form-control-sm" id="checkoutBillingEmail" type="email" placeholder="Email" required="" />
                                        </div>

                                    </div>
                                    <div className="col-12">

                                        {/* Company Name  */}
                                        <div className="form-group">
                                            <label for="checkoutBillingCompany">Company name *</label>
                                            <input className="form-control form-control-sm" id="checkoutBillingCompany" type="text" placeholder="Company name (optional)" />
                                        </div>

                                    </div>
                                    <div className="col-12">

                                        {/* Country  */}
                                        <div className="form-group">
                                            <label for="checkoutBillingCountry">Country *</label>
                                            <input className="form-control form-control-sm" id="checkoutBillingCountry" type="text" placeholder="Country" required="" />
                                        </div>

                                    </div>
                                    <div className="col-12">

                                        {/* Address Line 1  */}
                                        <div className="form-group">
                                            <label for="checkoutBillingAddress">Address Line 1 *</label>
                                            <input className="form-control form-control-sm" id="checkoutBillingAddress" type="text" placeholder="Address Line 1" required="" />
                                        </div>

                                    </div>
                                    <div className="col-12">

                                        {/* Address Line 2  */}
                                        <div className="form-group">
                                            <label for="checkoutBillingAddressTwo">Address Line 2</label>
                                            <input className="form-control form-control-sm" id="checkoutBillingAddressTwo" type="text" placeholder="Address Line 2 (optional)" />
                                        </div>

                                    </div>
                                    <div className="col-12 col-md-6">

                                        {/* Town / City  */}
                                        <div className="form-group">
                                            <label for="checkoutBillingTown">Town / City *</label>
                                            <input className="form-control form-control-sm" id="checkoutBillingTown" type="text" placeholder="Town / City" required="" />
                                        </div>

                                    </div>
                                    <div className="col-12 col-md-6">

                                        {/* ZIP / Postcode  */}
                                        <div className="form-group">
                                            <label for="checkoutBillingZIP">ZIP / Postcode *</label>
                                            <input className="form-control form-control-sm" id="checkoutBillingZIP" type="text" placeholder="ZIP / Postcode" required="" />
                                        </div>

                                    </div>
                                    <div className="col-12">

                                        {/* Mobile Phone  */}
                                        <div className="form-group mb-0">
                                            <label for="checkoutBillingPhone">Mobile Phone *</label>
                                            <input className="form-control form-control-sm" id="checkoutBillingPhone" type="tel" placeholder="Mobile Phone" required="" />
                                        </div>

                                    </div>
                                </div>

                                {/* Heading  */}
                                <h6 className="mb-7">Shipping Details</h6>

                                {/* Shipping details  */}
                                <div className="table-responsive mb-6">
                                    <table className="table table-bordered table-sm table-hover mb-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" id="checkoutShippingStandard" name="shipping" type="radio" />
                                                        <label className="custom-control-label text-body text-nowrap" for="checkoutShippingStandard">
                                                            Standard Shipping
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>Delivery in 5 - 7 working days</td>
                                                <td>$8.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" id="checkoutShippingExpress" name="shipping" type="radio" />
                                                        <label className="custom-control-label text-body text-nowrap" for="checkoutShippingExpress">
                                                            Express Shipping
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>Delivery in 3 - 5 working days</td>
                                                <td>$12.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" id="checkoutShippingShort" name="shipping" type="radio" />
                                                        <label className="custom-control-label text-body text-nowrap" for="checkoutShippingShort">
                                                            1 - 2 Shipping
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>Delivery in 1 - 2 working days</td>
                                                <td>$18.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" id="checkoutShippingFree" name="shipping" type="radio" />
                                                        <label className="custom-control-label text-body text-nowrap" for="checkoutShippingFree">
                                                            Free Shipping
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>Living won't the He one every subdue
                                                    meat replenish face was you morning
                                                    firmament darkness.</td>
                                                <td>$0.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Address  */}
                                <div className="mb-9">

                                    {/* Checkbox  */}
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="checkoutShippingAddress" type="checkbox" />
                                        <label className="custom-control-label font-size-sm" data-toggle="collapse" data-target="#checkoutShippingAddressCollapse" for="checkoutShippingAddress">
                                            Ship to a different address?
                                        </label>
                                    </div>

                                    {/* Collapse  */}
                                    <div className="collapse" id="checkoutShippingAddressCollapse">
                                        <div className="row mt-6">
                                            <div className="col-12">

                                                {/* Country  */}
                                                <div className="form-group">
                                                    <label for="checkoutShippingAddressCountry">Country *</label>
                                                    <input className="form-control form-control-sm" id="checkoutShippingAddressCountry" type="text" placeholder="Country" />
                                                </div>

                                            </div>
                                            <div className="col-12">

                                                {/* Address Line 1  */}
                                                <div className="form-group">
                                                    <label for="checkoutShippingAddressLineOne">Address Line 1 *</label>
                                                    <input className="form-control form-control-sm" id="checkoutShippingAddressLineOne" type="text" placeholder="Address Line 1" />
                                                </div>

                                            </div>
                                            <div className="col-12">

                                                {/* Address Line 2  */}
                                                <div className="form-group">
                                                    <label for="checkoutShippingAddressLineTwo">Address Line 2</label>
                                                    <input className="form-control form-control-sm" id="checkoutShippingAddressLineTwo" type="text" placeholder="Address Line 2 (optional)" />
                                                </div>

                                            </div>
                                            <div className="col-6">

                                                {/* Town / City  */}
                                                <div className="form-group">
                                                    <label for="checkoutShippingAddressTown">Town / City *</label>
                                                    <input className="form-control form-control-sm" id="checkoutShippingAddressTown" type="text" placeholder="Town / City" />
                                                </div>

                                            </div>
                                            <div className="col-6">

                                                {/* Town / City  */}
                                                <div className="form-group">
                                                    <label for="checkoutShippingAddressZIP">ZIP / Postcode *</label>
                                                    <input className="form-control form-control-sm" id="checkoutShippingAddressZIP" type="text" placeholder="ZIP / Postcode" />
                                                </div>

                                            </div>
                                            <div className="col-12">

                                                {/* Button  */}
                                                <button className="btn btn-sm btn-outline-dark" type="submit">
                                                    Save Address
                                                </button>

                                            </div>
                                        </div>
                                    </div>

                                </div>


                                {/* Heading  */}
                                <h6 className="mb-7">Payment</h6>

                                {/* List group  */}
                                <div className="list-group list-group-sm mb-7">
                                    <div className="list-group-item">

                                        {/* Radio  */}
                                        <div className="custom-control custom-radio">

                                            {/* Input  */}
                                            <input className="custom-control-input" id="checkoutPaymentCard" name="payment" type="radio" data-toggle="collapse" data-action="show" data-target="#checkoutPaymentCardCollapse" />

                                            {/* Label  */}
                                            <label className="custom-control-label font-size-sm text-body text-nowrap" for="checkoutPaymentCard">
                                                Credit Card <img className="ml-2" src="assets/img/brands/color/cards.svg" alt="..." />
                                            </label>

                                        </div>

                                    </div>
                                    <div className="list-group-item collapse py-0" id="checkoutPaymentCardCollapse">

                                        {/* Form  */}
                                        <div className="form-row py-5">
                                            <div className="col-12">
                                                <div className="form-group mb-4">
                                                    <label className="sr-only" for="checkoutPaymentCardNumber">Card Number</label>
                                                    <input className="form-control form-control-sm" id="checkoutPaymentCardNumber" type="text" placeholder="Card Number *" required="" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group mb-4">
                                                    <label className="sr-only" for="checkoutPaymentCardName">Name on Card</label>
                                                    <input className="form-control form-control-sm" id="checkoutPaymentCardName" type="text" placeholder="Name on Card *" required="" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="form-group mb-md-0">
                                                    <label className="sr-only" for="checkoutPaymentMonth">Month</label>
                                                    <select className="custom-select custom-select-sm" id="checkoutPaymentMonth">
                                                        <option>January</option>
                                                        <option>February</option>
                                                        <option>March</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="form-group mb-md-0">
                                                    <label className="sr-only" for="checkoutPaymentCardYear">Year</label>
                                                    <select className="custom-select custom-select-sm" id="checkoutPaymentCardYear">
                                                        <option>2017</option>
                                                        <option>2018</option>
                                                        <option>2019</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="input-group input-group-merge">
                                                    <input className="form-control form-control-sm" id="checkoutPaymentCardCVV" type="text" placeholder="CVV *" required="" />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text" data-toggle="popover" data-placement="top" data-trigger="hover" data-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards." data-original-title="" title="">
                                                            <i className="fe fe-help-circle"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="list-group-item">

                                        {/* Radio  */}
                                        <div className="custom-control custom-radio">

                                            {/* Input  */}
                                            <input className="custom-control-input" id="checkoutPaymentPaypal" name="payment" type="radio" data-toggle="collapse" data-action="hide" data-target="#checkoutPaymentCardCollapse" />

                                            {/* Label  */}
                                            <label className="custom-control-label font-size-sm text-body text-nowrap" for="checkoutPaymentPaypal">
                                                <img src="assets/img/brands/color/paypal.svg" alt="..." />
                                            </label>

                                        </div>

                                    </div>
                                </div>

                                {/* Notes  */}
                                <textarea className="form-control form-control-sm mb-9 mb-md-0 font-size-xs" rows="5" placeholder="Order Notes (optional)"></textarea>

                            </form>

                        </div>

                        <div className="col-12 col-md-5 col-lg-4 offset-lg-1">

                            {/* Heading  */}
                            <h6 className="mb-7">Order Items (3)</h6>

                            {/* Divider  */}
                            <hr className="my-7" />

                            {/* List group  */}
                            <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x mb-7">

                                <li className="list-group-item">
                                    <div className="row align-items-center">
                                        <div className="col-4">

                                            {/* Image  */}
                                            <a href="product.html">
                                                <img src="assets/img/products/product-6.jpg" alt="..." className="img-fluid" />
                                            </a>

                                        </div>

                                        <div className="col">

                                            {/* Title  */}
                                            <p className="mb-4 font-size-sm font-weight-bold">
                                                <a className="text-body" href="product.html">Cotton floral print Dress</a> <br />
                                                <span className="text-muted">$40.00</span>
                                            </p>

                                            {/* Text  */}
                                            <div className="font-size-sm text-muted">
                                                Size: M <br />
                                                Color: Red
                                            </div>

                                        </div>
                                    </div>
                                </li>



                            </ul>


                            <div className="card mb-9 bg-light">
                                <div className="card-body">
                                    <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                                        <li className="list-group-item d-flex">
                                            <span>Subtotal</span> <span className="ml-auto font-size-sm">$89.00</span>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <span>Tax</span> <span className="ml-auto font-size-sm">$00.00</span>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <span>Shipping</span> <span className="ml-auto font-size-sm">$8.00</span>
                                        </li>
                                        <li className="list-group-item d-flex font-size-lg font-weight-bold">
                                            <span>Total</span> <span className="ml-auto">$97.00</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Disclaimer  */}
                            <p className="mb-7 font-size-xs text-gray-500">
                                Your personal data will be used to process your order, support
                                your experience throughout this website, and for other purposes
                                described in our privacy policy.
                            </p>

                            {/* Button  */}
                            <button className="btn btn-block btn-dark">
                                Place Order
                            </button>

                        </div>

                    </div>
                </div>
            </section>

            {/* FEATURES  */}
            <section className="bg-light py-9">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">

                            {/* Item  */}
                            <div className="d-flex mb-6 mb-lg-0">

                                {/* Icon  */}
                                <i className="fe fe-truck font-size-lg text-primary"></i>

                                {/* Body  */}
                                <div className="ml-6">

                                    {/* Heading  */}
                                    <h6 className="heading-xxs mb-1">
                                        Free shipping
                                    </h6>

                                    {/* Text  */}
                                    <p className="mb-0 font-size-sm text-muted">
                                        From all orders over $100
                                    </p>

                                </div>

                            </div>

                        </div>
                        <div className="col-12 col-md-6 col-lg-3">

                            {/* Item  */}
                            <div className="d-flex mb-6 mb-lg-0">

                                {/* Icon  */}
                                <i className="fe fe-repeat font-size-lg text-primary"></i>

                                {/* Body  */}
                                <div className="ml-6">

                                    {/* Heading  */}
                                    <h6 className="mb-1 heading-xxs">
                                        Free returns
                                    </h6>

                                    {/* Text  */}
                                    <p className="mb-0 font-size-sm text-muted">
                                        Return money within 30 days
                                    </p>

                                </div>

                            </div>

                        </div>
                        <div className="col-12 col-md-6 col-lg-3">

                            {/* Item  */}
                            <div className="d-flex mb-6 mb-md-0">

                                {/* Icon  */}
                                <i className="fe fe-lock font-size-lg text-primary"></i>

                                {/* Body  */}
                                <div className="ml-6">

                                    {/* Heading  */}
                                    <h6 className="mb-1 heading-xxs">
                                        Secure shopping
                                    </h6>

                                    {/* Text  */}
                                    <p className="mb-0 font-size-sm text-muted">
                                        You're in safe hands
                                    </p>

                                </div>

                            </div>

                        </div>
                        <div className="col-12 col-md-6 col-lg-3">

                            {/* Item  */}
                            <div className="d-flex">

                                {/* Icon  */}
                                <i className="fe fe-tag font-size-lg text-primary"></i>

                                {/* Body  */}
                                <div className="ml-6">

                                    {/* Heading  */}
                                    <h6 className="mb-1 heading-xxs">
                                        Over 10,000 Styles
                                    </h6>

                                    {/* Text  */}
                                    <p className="mb-0 font-size-sm text-muted">
                                        We have everything you need
                                    </p>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER  */}

        </>
    )
}

export default Checkout
