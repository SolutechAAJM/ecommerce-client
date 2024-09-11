import React, { useEffect, useRef, useState } from "react";
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
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          scrollContainer.scrollBy({ left: 1, behavior: "smooth" });
        }
      }, 20);
    };

    const stopScrolling = () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };

    const restartScrolling = () => {
      stopScrolling();
      setTimeout(() => startScrolling(), 500);
    };

    if (selectedCategory) {
      startScrolling();
      scrollContainer.addEventListener("mouseenter", stopScrolling);
      scrollContainer.addEventListener("mouseleave", startScrolling);
    }

    return () => {
      clearInterval(scrollInterval);
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", stopScrolling);
        scrollContainer.removeEventListener("mouseleave", startScrolling);
      }
    };
  }, [selectedCategory]);

  const categories = [
    {
      title: "Hombres",
      data: [
        {
          title: "Ropa",
          data: ["Camisetas", "Buzos", "Chaquetas"],
        },
        {
          title: "Calzado",
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
          data: ["Camisetas", "Buzos", "Chaquetas"],
        },
        {
          title: "Calzado",
          data: ["Tenis", "Zapatos", "Botas"],
        },
      ],
    },
    {
      title: "Mujeres",
      data: [
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
            {categories.map((category, index) => (
              <button key={index} onClick={() => handleCategoryClick(category)}>
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
          <div className="tablesWrapper">
            <button className="scrollButton" >
              <CaretLeft size={32} />
            </button>
            <section
              className={`tablesCategories ${selectedCategory ? "active" : ""}`}
              ref={scrollContainerRef}
            >
              {selectedCategory.data.map((data, index) => (
                <div
                  className="menuItem"
                  key={index}
                  onClick={() => setSelectedCategory(null)}
                >
                  <MenuItem category={data} />
                </div>
              ))}
            </section>
            <button className="scrollButton" >
              <CaretRight size={32} />
            </button>
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
