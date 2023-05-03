import React, { useState } from "react";
import "../slider/Slider.css";
import css from "./Products.module.css";
import { ProductsData } from "../../data/products";
// import { type } from "@testing-library/user-event/dist/type";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = () => {
  const [parent] = useAutoAnimate();

  const [MenuProducts, setMenuProducts] = useState(ProductsData);
  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };

  return (
    <div className={css.container}>
      <h1> Our Featured Products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>ALL</li>
          <li onClick={() => filter("High rated")}>High rated</li>
          <li onClick={() => filter("Medium qulity")}>Medium qulity</li>
          <li onClick={() => filter("Daily use")}>Daily use</li>
        </ul>
        <div className={css.list} ref={parent}>
          {MenuProducts.map((product, i) => (
            <div className={css.product}>
              <div className="left_s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span className="price1">Rs.{product.price}</span>
                <div> Shop Now</div>
              </div>
              <img src={product.img} alt="product" className="img_product" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
