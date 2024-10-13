import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";
import { Star, StarHalf } from "phosphor-react";

const Product = ({ product }) => {
  const { image, name, mark, characteristics, price, score } = product;
  const firstFourCharacteristics = characteristics
    ? Object.values(characteristics).slice(0, 4).join(", ")
    : "";
  const fullStars = Math.floor(score);
  const hasHalfStar = score % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return (
    <>
      <Image
        className="imageProduct"
        src={image}
        alt="product"
        height={100}
        width={100}
      />
      <p>
        {name} {mark}
        {firstFourCharacteristics && ` ${firstFourCharacteristics}`}
      </p>
      <p>${price.toLocaleString("en-US")}</p>
      <div>
        {Array.from({ length: fullStars }, (_, index) => (
          <Star key={index} size={20} color="#fff1a8" weight="fill" />
        ))}
        {hasHalfStar && <StarHalf size={20} color="#fff1a8" weight="fill" />}
        {Array.from({ length: emptyStars }, (_, index) => (
          <Star key={index} size={20} color="#fff1a8" />
        ))}
      </div>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    mark: PropTypes.string,
    characteristics: PropTypes.object,
    price: PropTypes.number,
    score: PropTypes.number,
    image: PropTypes.string,
  }),
};

export default Product;
