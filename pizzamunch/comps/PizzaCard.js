import React from "react";
import Pizza from "../public/img/pizza.png";
import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
function PizzaCard() {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={Pizza} alt="" width="500" height="500" />
      <h1 className={styles.title}>FIRORI DI ZUCCA</h1>
      <span className={styles.price}>#3000</span>
      <p className={styles.desc}>
        This is a variety of Italian pizza that is traditionally topped with
        mozzarella cheese, zucchini flowers, olive oil, and salted anchovies. If
        one is using the untraditional method, it is recommended to add some
        black pepper and garlic for extra flavor.
      </p>
    </div>
  );
}

export default PizzaCard;
