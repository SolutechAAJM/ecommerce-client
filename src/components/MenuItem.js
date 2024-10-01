import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";

const MenuItem = ({ category: { title = "", image, data } }) => {
  return (
    <div className="item">
      <div className="imageTitle">
        <div>
          <h2>{title}</h2>
        </div>
        {image && (
          <Image
            className="image"
            src={image}
            alt="logo"
            width={50}
            height={50}
          />
        )}
      </div>
      <div className="itemData">
        {data.map((item) => (
          <div key={item.id}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default MenuItem;
