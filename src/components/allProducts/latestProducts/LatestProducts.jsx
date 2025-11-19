import React, { use } from 'react';
import Product from '../../Product';

const LatestProducts = ({ latestProductsPromise }) => {
    const Products = use(latestProductsPromise);

    return (
        <div>
            <h2 className='text-5xl'>
                Latest <span className='text-primary'>Products</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    Products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default LatestProducts;