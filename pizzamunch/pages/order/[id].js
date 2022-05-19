import React from "react";
import styles from "../../styles/order.module.css";
import Image from 'next/image'
function Order() {

    const status = 0
    const StatusClass =(index)=>{
     if(index - status < 1) return styles.done
     if(index - status === 1) return styles.preparing
        
    if(index - status > 1) return styles.undone
    }
        
  return (
    <div className={styles.container}>

      <div className={styles.left}>
          <div className={styles.row}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Total</th>
          </tr>

          <tr className={styles.tr}>
            <td>
              <span className={styles.orderID}>377588588</span>
            </td>
            <td >
                <span className={styles.name}>Assumpta Okolike</span>
            </td>
            <td>
                <span className={styles.address}>
                  House 233, street 4 CBN estate off Garki Road
                </span>
            </td>

             <td>
                 <span className={styles.total}>
                     #7000
                 </span>
             </td>

          </tr>
          </table>
          </div>
         
          <div className={styles.row}>   
              <div className={StatusClass(0)}>
                <Image src="/img/paid.png" width={30} height={30} alt=""/>
                   <span>Payment</span> 
                   <div className={styles.checkedIcon}>
                       <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=""/>
                       </div> 
              </div>

              <div className={StatusClass(1)}>
                <Image src="/img/bake.png" width={30} height={30} alt=""/>
                   <span>Cooking</span> 
                   <div className={styles.checkedIcon}>
                       <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=""/>
                       </div> 
              </div>

              <div className={StatusClass(2)}>
                <Image src="/img/bike.png" width={30} height={30} alt=""/>
                   <span>On the way!</span> 
                   <div className={styles.checkedIcon}>
                       <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=""/>
                       </div> 
              </div>

              <div className={StatusClass(3)}>
                <Image src="/img/delivered.png" width={30} height={30} alt=""/>
                   <span>Delivered</span> 
                   <div className={styles.checkedIcon}>
                       <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=""/>
                       </div> 
                       </div>
                       </div>
      </div>
         
     

          {/* <tr className={styles.tr}>
            <td >
                <span className={styles.orderID}>4444557</span>
            </td>
            <td>
                <span className={styles.name}>
                    Rita Enomie
                </span>
            </td>
            <td>
                <span className={styles.address}>
                    Number 5, Darkwu Estate, Asokoro Abuja.
                </span>
            </td>

             <td>
                 <span className={styles.total}>
                     #15000
                 </span>
             </td>

          </tr>
        </table>
      </div> */}

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

          <button disabled className={styles.button}>
            PAID!
          </button>
        </div>
      </div>

    </div>
  );
}

export default Order;
