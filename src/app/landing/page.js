"use client";

import React from "react";
import "./components/style/landing.css";
import NavBar from "@/components/NavBar";
import OffersWrapper from "./components/OffersWrapper";
import ProductsWrapper from "./components/ProductsWrapper";

const landing = () => {
  const offers = [
    {
      id: 1,
      title: "Disfruta del deporte",
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
    {
      id: 2,
      title: "Encuentra los mejores accesorios",
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
    {
      id: 3,
      title: "Descubre nueva tecnologia",
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
    {
      id: 4,
      title: "Disfruta del deporte",
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
    {
      id: 5,
      title: "Encuentra los mejores accesorios",
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
    {
      id: 6,
      title: "Descubre nueva tecnologia",
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
    {
      id: 7,
      title: "Disfruta del deporte",
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
    {
      id: 8,
      title: "Encuentra los mejores accesorios",
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
    {
      id: 9,
      title: "Descubre nueva tecnologia",
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
  ]; 
  const products = [
    {
      id: 1,
      name: "portatil",
      mark: "asus",
      characteristics: {
        processor: "core i5",
        ram: "ram 16GB",
        hardDrive: "512GB",
        screen: "16,5 pulgadas",
      },
      price: 3000,
      score: 8,
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
    {
      id: 2,
      name: "portatil",
      mark: "hp",
      characteristics: {
        processor: "core i7",
        ram: "ram 16GB",
        hardDrive: "1TB",
        screen: "15,6 pulgadas",
      },
      price: 3500000,
      score: 3.5,
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
    {
      id: 3,
      name: "portatil",
      mark: "dell",
      characteristics: {
        processor: "core i5",
        ram: "ram 8GB",
        hardDrive: "256GB",
        screen: "14 pulgadas",
      },
      price: 2800000,
      score: 3,
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
    {
      id: 4,
      name: "portatil",
      mark: "acer",
      characteristics: {
        processor: "core i3",
        ram: "ram 8GB",
        hardDrive: "512GB",
        screen: "15,6 pulgadas",
      },
      price: 2400000,
      score: 3,
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
    {
      id: 5,
      name: "portatil",
      mark: "lenovo",
      characteristics: {
        processor: "core i7",
        ram: "ram 16GB",
        hardDrive: "1TB",
        screen: "17 pulgadas",
      },
      price: 4000000,
      score: 2.5,
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
    {
      id: 6,
      name: "portatil",
      mark: "msi",
      characteristics: {
        processor: "core i9",
        ram: "ram 32GB",
        hardDrive: "2TB",
        screen: "17,3 pulgadas",
      },
      price: 8000000,
      score: 3.5,
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
    {
      id: 7,
      name: "portatil",
      mark: "apple",
      characteristics: {
        processor: "M1",
        ram: "ram 8GB",
        hardDrive: "512GB",
        screen: "13,3 pulgadas",
      },
      price: 6000000,
      score: 1.5,
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
    {
      id: 8,
      name: "portatil",
      mark: "samsung",
      characteristics: {
        processor: "core i5",
        ram: "ram 8GB",
        hardDrive: "512GB",
        screen: "15 pulgadas",
      },
      price: 2700000,
      score: 3.5,
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
    {
      id: 9,
      name: "portatil",
      mark: "huawei",
      characteristics: {
        processor: "core i7",
        ram: "ram 16GB",
        hardDrive: "1TB",
        screen: "16 pulgadas",
      },
      price: 3800000,
      score: 5,
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
    {
      id: 10,
      name: "portatil",
      mark: "toshiba",
      characteristics: {
        processor: "core i3",
        ram: "ram 4GB",
        hardDrive: "256GB",
        screen: "14 pulgadas",
      },
      price: 2000000,
      score: 2.43,
      image:
        "https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L",
    },
  ];
  const productsList = [
    {
      id: 1,
      title: "computadores",
      products: products,
    },
    {
      id: 2,
      title: "hola",
      products: products,
    },
    {
      id: 3,
      title: "ñaicol",
      products: products,
    },
    {
      id: 4,
      title: "gay",
      products: products,
    },
  ];
  return (
    <div>
      <NavBar />
      <div className="landing">
        <OffersWrapper offers={offers} />
        {productsList.map((product=>(
          <div key={product.id}>
            <ProductsWrapper products={product} />
          </div>
        )))}
      </div>
    </div>
  );
};

export default landing;
