import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '@/components/Widgets/Carousel';

const ProductCardWidget = ({ products }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="block">
          <Carousel settings={{ slidesToShow: 4, slidesToScroll: 4 }}>
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group p-1 md:p-2">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

ProductCardWidget.propTypes = {
  products: PropTypes.array,
};

export default ProductCardWidget;
