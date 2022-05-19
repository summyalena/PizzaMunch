import React from 'react'
import Image from 'next/image';
import styles from '../styles/Navbar.module.css'
import Phone from '../public/img/telephone.png'
import Logo from '../vector/isolated-monochrome-white.svg'
import Cart from '../public/img/cart.png'
// import Link from 'next/link'
import {useState} from 'react'
function Navbar() {

    const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.call}>
                <Image src={Phone} alt=" " width="35" height="35"/>
            </div>

            <div className={styles.text}>
                <div className={styles.writeup}>ORDER NOW</div>
                <div className={styles.writeup}>+2348184410475</div>
            </div>
        </div>
        
        <div className={styles.item}>
             <ul className={styles.lists}>
                 <li className={styles.list}>Home</li>
                 <li className={styles.list}>Products</li>
                 <li className={styles.list}>Menu</li>
                 <Image src={Logo} alt="" width="150px" height="63px"/>
                 <li className={styles.list}>Events</li>
                 <li className={styles.list}>Blog</li>
                 <li className={styles.list}>Contacts</li>
             </ul>
        </div>
        <div className={styles.hamburger} onClick={()=>setOpen(!open)}>
            <div className={styles.line}/>
            <div className={styles.line}/>
            <div className={styles.line}/>

        </div>
        <ul className={styles.menu} onClick={()=>setOpen(false)} style={{right:open ? "0px" : "-50vw" }}>
            <li className={styles.menuList}>Home</li>
            <li className={styles.menuList}>Products</li>
            <li className={styles.menuList}>Menu</li>
            <li className={styles.menuList}>Events</li>
            <li className={styles.menuList}>Blog</li>
            <li className={styles.menuList}>Contact</li>
        </ul>

        <div className={styles.item}>
            <div className={styles.cart}>
            <Image src={Cart} alt="cart" width="30px" height="30px"/>
            <div className={styles.counter}>2</div>
            </div> 
        </div>


    </div>
  )
}

export default Navbar