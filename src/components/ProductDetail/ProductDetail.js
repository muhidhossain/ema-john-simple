import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import "./ProductDetail.css"

const ProductDetail = () => {
    const { productKey } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/product/' + productKey)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [productKey])

    return (
        <div className="productDetail-container">
            <h1>Product Details</h1>
            {
                product && <Product showAddToCart={false} product={product}></Product>
            }
        </div>
    );
};

export default ProductDetail;