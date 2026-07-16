import React from "react";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer
        className="pt-5 pb-3 mt-5 border-top shadow-sm"
        style={{ backgroundColor: "#e9ecef" }}
        >
        <div className="container">
            <div className="row">

                <div className="col-md-3 mb-4">
                    <h3 className="fw-bold text-primary">
                        NovaCart
                    </h3>
                <p className="text-dark">
                     Your trusted online shopping destination offering quality
                     products, secure payments, and fast delivery.
                </p>
                </div>
                <div className="col-md-3 mb-4">
                    <h5 className="fw-bold  text-primary">Quick Links</h5>
                    <ul className="list-unstyled ">
                        <li>
                            <Link to="/" 
                            className="text-dark text-decoration-none">
                                Home
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="/products"
                            className="text-dark text-decoration-none">
                                Products
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="/about"
                            className="text-dark text-decoration-none">
                                About
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="/contact"
                            className="text-dark text-decoration-none">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col-md-3 mb-4">
                    <h5 className="fw-bold text-primary">Customer Support</h5>
                    <ul className="list-unstyled ">
                        <li>FAQs</li>
                        <li>Shipping Policy</li>
                        <li>Return Policy</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="col-md-3 mb-4">
                    <h5 className="fw-bold text-primary">
                        Contact
                    </h5>
                    <p className="text-dark mb-1">
                         📧 support@novacart.com
                    </p>
                    <p className="text-dark mb-1">
                    📞 +91 98765 43210
                    </p>

                    <p className="text-dark">
                       📍 Ranikhet, Uttarakhand
                    </p>
                </div>
            </div>
            <hr className="border-secondary"/>
            <div className="text-center">
                <p className="mb-0  fw-semibold text-dark">
                    © 2026 NovaCart. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;