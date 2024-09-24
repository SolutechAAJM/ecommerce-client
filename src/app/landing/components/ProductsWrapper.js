import React, { useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import PropTypes from "prop-types";
import Product from "./Product";

const ProductsWrapper = ({ products }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const itemsPerPage = 5;

  const handleNext = () => {
    if (visibleIndex + itemsPerPage < products.products.length) {
      setVisibleIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (visibleIndex > 0) {
      setVisibleIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <h2 className="titleProducts">{products.title}</h2>
      <div className={`wrapper ${visibleIndex > 0 ? "between" : "end"}`}>
        {visibleIndex > 0 && (
          <button className="scrollButton" onClick={handlePrev}>
            <CaretLeft size={32} />
          </button>
        )}
        <section className="list">
          {products.products
            .slice(visibleIndex, visibleIndex + itemsPerPage)
            .map((product) => (
              <div key={product.id} className="product">
                <Product product={product} />
              </div>
            ))}
        </section>
        {visibleIndex + itemsPerPage < products.products.length && (
          <button className="scrollButton" onClick={handleNext}>
            <CaretRight size={32} />
          </button>
        )}
      </div>
    </>
  );
};

ProductsWrapper.propTypes = {
  products: PropTypes.shape({
    title: PropTypes.string,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        mark: PropTypes.string,
        characteristics: PropTypes.shape({
          processor: PropTypes.string,
          ram: PropTypes.string,
          hardDrive: PropTypes.string,
          screen: PropTypes.string,
        }),
        price: PropTypes.number,
        score: PropTypes.number,
        image: PropTypes.string,
      })
    ),
  }),
};


export default ProductsWrapper;
