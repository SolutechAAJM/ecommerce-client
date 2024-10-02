import React, { useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import PropTypes from "prop-types";
import Offer from "./Offer";

const OffersWrapper = ({ offers }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (visibleIndex + itemsPerPage < offers.length) {
      setVisibleIndex((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (visibleIndex > 0) {
      setVisibleIndex((prev) => prev - 1);
    }
  };
  return (
    <div className={`wrapper ${visibleIndex > 0 ? "between" : "end"}`}>
      {visibleIndex > 0 && (
        <button className="scrollButton" onClick={handlePrev}>
          <CaretLeft size={32} />
        </button>
      )}
      <section className="list">
        {offers
          .slice(visibleIndex, visibleIndex + itemsPerPage)
          .map((offer) => (
            <div key={offer.id} className="offer">
              <Offer offer={offer} />
            </div>
          ))}
      </section>
      {visibleIndex + itemsPerPage < offers.length && (
        <button className="scrollButton" onClick={handleNext}>
          <CaretRight size={32} />
        </button>
      )}
    </div>
  );
};

OffersWrapper.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default OffersWrapper;
