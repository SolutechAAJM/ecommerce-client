import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { Plus } from "phosphor-react";

const Offer = ({ offer }) => {
  return (
    <>
      <div className="title">
        <h2>{offer.title}</h2>
        <div className="plus">
          <Plus size={32} />
        </div>
      </div>
      <Image
        className="imageOffer"
        src={offer.image}
        alt="offer"
        height={100}
        width={100}
      />
    </>
  );
};

Offer.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
  }),
};
export default Offer;
