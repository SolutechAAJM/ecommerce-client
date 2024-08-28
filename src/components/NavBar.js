import React from "react";
import Image from "next/image";
import "./styles/NavBar.css";
import {
  CaretDown,
  MagnifyingGlass,
  Question,
  ShoppingCartSimple,
  UserCircle,
} from "phosphor-react";

const NavBar = () => {
  const categories = [
    "Hombres",
    "Mujeres",
    "Niños",
    "Accesorios",
    "Tecnologia",
  ];
  return (
    <nav>
      <Image
        className="logo"
        src="/Logo.png"
        alt="logo"
        width={130}
        height={110}
      />
      <div>
        <div className="searchOptions">
          <div>
            <input />
            <MagnifyingGlass size={32} />
          </div>
          <section>
            <div>
              <Question size={32} />
              <p>ayuda</p>
            </div>
            <div>
              <UserCircle size={32} />
              <p>Mi cuenta</p>
            </div>
            <div>
              <ShoppingCartSimple size={32} />
              <p>Mi carrito</p>
            </div>
          </section>
        </div>
        <div className="categories">
          {categories.map((category, index) => (
            <div className="category" key={index}>
              <p>{category}</p>
              <CaretDown size={32} />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
