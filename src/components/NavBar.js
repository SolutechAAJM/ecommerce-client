import React, { useState } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import "./styles/NavBar.css";
import {
  CaretDown,
  CaretLeft,
  CaretRight,
  MagnifyingGlass,
  Question,
  ShoppingCartSimple,
  UserCircle,
} from "phosphor-react";

const NavBar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const itemsPerPage = 4;
  const categories = [
    {
      title: "Hombres",
      data: [
        {
          title: "Ropa",
          image:
            "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
          data: ["Camisetas", "Buzos", "Chaquetas"],
        },
        {
          title: "Calzado",
          image:
            "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
          data: [
            "Tenis",
            "Zapatos",
            "Botas",
            "Tenis",
            "Zapatos",
            "Botas",
            "Tenis",
            "Zapatos",
            "Botas",
            "Tenis",
            "Zapatos",
            "Botas",
          ],
        },
        {
          title: "Ropa",
          image:
            "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
          data: ["Camisetas", "Buzos", "Chaquetas"],
        },
        {
          title: "Calzado",
          image:
            "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
          data: ["Tenis", "Zapatos", "Botas"],
        },
        {
          title: "Ropa",
          image:
            "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
          data: ["Camisetas", "Buzos", "Chaquetas"],
        },
        {
          title: "Calzado",
          image:
            "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
          data: [
            "Tenis",
            "Zapatos",
            "Botas",
            "Tenis",
            "Zapatos",
            "Botas",
            "Tenis",
            "Zapatos",
            "Botas",
            "Tenis",
            "Zapatos",
            "Botas",
          ],
        },
        {
          title: "Ropa",
          image:
            "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
          data: ["Camisetas", "Buzos", "Chaquetas"],
        },
        {
          title: "Calzado",
          image:
            "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
          data: ["Tenis", "Zapatos", "Botas"],
        },
      ],
    },
    {
      title: "Mujeres",
      data: [
        {
          title: "Ropa",
          image:
            "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
          data: ["Camisetas", "Buzos", "Chaquetas"],
        },
        {
          title: "Calzado",
          image:
            "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
          data: ["Tenis", "Zapatos", "Botas"],
        },
      ],
    },
    {
      title: "Niños",
      data: [
        {
          title: "Ropa",
          data: ["Camisetas", "Buzos", "Chaquetas"],
        },
        {
          title: "Ropa",
          data: ["Camisetas", "Buzos", "Chaquetas"],
        },
        {
          title: "Calzado",
          data: ["Tenis", "Zapatos", "Botas"],
        },
      ],
    },
    {
      title: "Hombres",
      data: [
        {
          title: "Ropa",
          data: ["Camisetas", "Buzos", "Chaquetas"],
        },
        {
          title: "Calzado",
          data: ["Tenis", "Zapatos", "Botas"],
        },
        {
          title: "Ropa",
          data: ["Camisetas", "Buzos", "Chaquetas"],
        },
        {
          title: "Calzado",
          data: ["Tenis", "Zapatos", "Botas"],
        },
      ],
    },
    {
      title: "Hombres",
      data: [
        {
          title: "Ropa",
          data: ["Camisetas", "Buzos", "Chaquetas"],
        },
        {
          title: "Calzado",
          data: ["Tenis", "Zapatos", "Botas"],
        },
        {
          title: "Ropa",
          data: ["Camisetas", "Buzos", "Chaquetas"],
        },
        {
          title: "Calzado",
          data: ["Tenis", "Zapatos", "Botas"],
        },
      ],
    },
  ];

  const handleCategoryClick = (category) => {
    if (selectedCategory?.title === category.title) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
      setVisibleIndex(0);
    }
  };

  const handleNext = () => {
    if (visibleIndex + itemsPerPage < selectedCategory?.data.length) {
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
      <nav>
        <Image
          className="logo"
          src="/Logo.png"
          alt="logo"
          width={100}
          height={100}
        />
        <div className="searchCategories">
          <div className="searchOptions">
            <div className="search">
              <input placeholder="Buscar" />
              <MagnifyingGlass size={30} />
            </div>
            <section className="options">
              <div>
                <Question size={32} />
                <p>Ayuda</p>
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
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category)}
              >
                <div className="category">
                  <p>{category.title}</p>
                  <CaretDown size={20} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </nav>
      {selectedCategory && (
        <div>
          <div
            className={`tablesWrapper ${visibleIndex > 0 ? "between" : "end"}`}
          >
            {visibleIndex > 0 && (
              <button className="scrollButton" onClick={handlePrev}>
                <CaretLeft size={32} />
              </button>
            )}
            <section
              className={`tablesCategories ${selectedCategory ? "active" : ""}`}
            >
              {selectedCategory.data
                .slice(visibleIndex, visibleIndex + itemsPerPage)
                .map((data) => (
                  <button
                    className="menuItem"
                    key={data.id}
                    onClick={() => setSelectedCategory(null)}
                  >
                    <MenuItem category={data} />
                  </button>
                ))}
            </section>
            {visibleIndex + itemsPerPage < selectedCategory.data.length && (
              <button className="scrollButton" onClick={handleNext}>
                <CaretRight size={32} />
              </button>
            )}
          </div>
          <button onClick={() => setSelectedCategory(null)}>
            <div className="foot" />
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
