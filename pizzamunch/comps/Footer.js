import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import {ImTwitter} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import BG from "../public/img/bgg.png";
function Footer() {
  return (
    <div className={styles.container}>

      <div className={styles.item}>
        <Image src={BG} alt="" objectFit="contain" layout="fill" />
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            IF IT ISN'T MOUTH WATERING, IT ISN'T PIZZAMUNCH
          </h2>
          <p className={styles.text}>Contact Me:<a href="https://twitter.com/AOkolike" target="blank"><ImTwitter/></a>
          <a href="https://www.linkedin.com/in/assumpta-okolike-58aba41b3/" target="blank"><BsLinkedin/></a>
          <a href="https://github.com/summyalena" target="blank"><AiFillGithub/></a>
          </p>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            House 198, APO New site #384
            <br /> Apo, 900104
            <br /> +2348184410475
          </p>

          <p className={styles.text}>
            House 198, APO New site #125
            <br /> Apo, 900104
            <br /> +2348184410475
          </p>

          <p className={styles.text}>
            House 198, APO New site #378
            <br /> Apo, 900104
            <br /> +2348184410475
          </p>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 21:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>

      </div>
    </div>
  );
}

export default Footer;
