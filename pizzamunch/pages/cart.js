import React from "react";
import Image from 'next/image'
import styles from "../styles/Cart.module.css";
function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>

        <table className={styles.table}>
          <thead>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          </thead>   

          <tbody>
          <tr className={styles.tr}>
            <td>
                <div className={styles.imgContainer}>
              <Image
                src="/img/pizza.png"
                alt=""
                objectFit="contain"
                layout="fill"
              />
              </div>
            </td>
            <td >
                <span className={styles.name}>CAMPAGNOLA</span>
            </td>
            <td>
                <span className={styles.extras}>
                    Double Ingredients and spicy sauce
                </span>
            </td>
            <td>
                <span className={styles.price}>
                    #3500
                </span>
            </td>
             <td>
                 <span className={styles.quantity}>
                     2
                 </span>
             </td>

             <td>
                 <span className={styles.total}>
                     #7000
                 </span>
             </td>

          </tr>

          <tr className={styles.tr}>
            <td>
                <div className={styles.imgContainer}>
              <Image
                src="/img/pizza.png"
                alt=""
                objectFit="contain"
                layout="fill"
              />
              </div>
            </td>
            <td >
                <span className={styles.name}>PEPPERONI PIZZA</span>
            </td>
            <td>
                <span className={styles.extras}>
                    Double Ingredients and spicy sauce
                </span>
            </td>
            <td>
                <span className={styles.price}>
                    #5000
                </span>
            </td>
             <td>
                 <span className={styles.quantity}>
                     3
                 </span>
             </td>

             <td>
                 <span className={styles.total}>
                     #15000
                 </span>
             </td>

          </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b> #5000
                </div>

                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b> #0.00
                </div>

                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b> #5000
                </div>

                <button className={styles.button}>Checkout Now!</button>
              </div>
      </div>
    </div>
  );
}

export default Cart;
