import React from "react";
import Image from "next/image";
import styles from "../../styles/product.module.css";
import { useState } from "react";
function Product() {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/campagnola.png",
    name: "CAMPAGNOLA",
    price: [3000, 4500, 6000],
    desc: "A Pizza Rustica exclusive, topped with authentic sweet Italian rope sausage, delicious roasted peppers, sweet red onions, tangy plum tomato sauce and melted mozzarella cheese",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image  src={pizza.img} objectFit="contain" alt="" layout="fill" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>#{pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose your size</h3>
        <div className={styles.sizes}>
          <div
            className={styles.size}
            onClick={() => {
              setSize(0);
            }}
          >
            <Image
              src="/img/size.png"
              objectFit="contain"
              layout="fill"
              alt=""
            />
            <span className={styles.number}>Small</span>
          </div>

          <div
            className={styles.size}
            onClick={() => {
              setSize(1);
            }}
          >
            <Image
              src="/img/size.png"
              objectFit="contain"
              layout="fill"
              alt=""
            />
            <span className={styles.number}>Medium</span>
          </div>

          <div
            className={styles.size}
            onClick={() => {
              setSize(2);
            }}
          >
            <Image
              src="/img/size.png"
              objectFit="contain"
              layout="fill"
              alt=""
            />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional Ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              id="sauce"
              name="sauce"
              className={styles.checkbox}
            />
            <label htmlFor="sauce">Spicy sauce</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className={styles.checkbox}
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>

        <input type="number" defaultValue={1} className={styles.add}/>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
