import React from 'react';
import ProductCard from './ProductCard';
import image1 from '../../public/smart-watch1.png';
import image2 from '../../public/smart-watch2.png';

const ProductList = () => {

    const product = [
        {
            id: 1,
            name: 'Best Headphones Ever',
            defaultPrice: 100,
            price: 49,
            save:50,
            image: image1,
            isNew: true,
            isTrending: true,
            buttonText: 'Add To Cart', 
        },
        {
            id: 2,
            name: 'Best Headphones Ever',
            defaultPrice: 100,
            price: 80,
            save:20,
            image: image2,
            isNew: true,
            isTrending: true,
            buttonText: 'Add To Cart', 
        },
    ]

    return (
        <div className='h-screen flex items-center justify-center gap-8 dark:bg-gray-800'>
            {
                product.map((item) => {
                    return <ProductCard key={item.id} product={item} />
                })
            }
        </div>
    )
}

export default ProductList;