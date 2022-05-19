import React from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCart from './PizzaCard'
function PizzaList() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>TOP NOTCH PIZZA </h2>
      <p className={styles.desc}>
        We make quality Italian pizza from an actual Italian wood oven (talk
        about commitment), PizzaMunch is well known for its many kinds of pasta,
        and you can however enjoy your pizza while enjoying the scenery of the
        sparkling poolside.you can satiate your taste buds with some suya while you go
        through our menu for some other worthy additions to your meal.
      </p>

      <div className={styles.pizzaCart}>
          <PizzaCart/>
          <PizzaCart/>
          <PizzaCart/>
          <PizzaCart/>
          <PizzaCart/>
          <PizzaCart/>
          <PizzaCart/>
          <PizzaCart/>
      </div>
    </div>
  );
}

export default PizzaList;
