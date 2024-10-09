import React, { useEffect, useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import PropTypes from "prop-types";
import Product from "./Product";
import { motion, AnimatePresence } from "framer-motion";

const ProductsWrapper = ({ products }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        setItemsPerPage(1);
      } else if (screenWidth < 900) {
        setItemsPerPage(2);
      } else if (screenWidth < 1200) {
        setItemsPerPage(3);
      } else if (screenWidth < 1500) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(5);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const handleNext = () => {
    if (visibleIndex + itemsPerPage < products.products.length) {
      setDirection(1);
      setVisibleIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (visibleIndex > 0) {
      setDirection(-1);
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
        <AnimatePresence initial={false} custom={direction}>
          <motion.section
            key={visibleIndex}
            className="list"
            initial={{ x: direction > 0 ? 200 : -200 }}
            animate={{ x: 0 }}
            exit={{ x: direction > 0 ? -200 : 200 }} // Animación de salida del contenedor general
            transition={{ duration: 0.2 }}
            custom={direction}
          >
            {products.products
              .slice(visibleIndex, visibleIndex + itemsPerPage)
              .map((product) => (
                <motion.div
                  key={product.id}
                  className="product"
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }} // Animación de salida individual
                  transition={{ duration: 0.2 }}
                >
                  <Product product={product} />
                </motion.div>
              ))}
          </motion.section>
        </AnimatePresence>

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
