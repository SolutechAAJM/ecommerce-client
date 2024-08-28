import Image from "next/image";
import React from "react";

const MenuItem = ({category}) => {
  return (
    <div className="item">
      <div className="imageTitle">
        <Image
          className="image"
          src="/Logo.png"
          alt="logo"
          width={50}
          height={50}
        />
        <div><h2>{category.title}</h2></div>
      </div>
      <div className="itemData">
          {category.data.map((item,index)=>
          <div key={index}>
            <p>{item}</p>
          </div>
          )}
      </div>
    </div>
  );
};

export default MenuItem;
