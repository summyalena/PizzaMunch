import React from 'react'
import styles from '../styles/slider.module.css'
import Arrow1 from '../public/img/arrowl.png'
import Arrow2 from '../public/img/arrowr.png'
import {useState} from 'react'
import Image from 'next/image'

function slider(){
const [index,setIndex] = useState(0);

const images = [
    '/img/featured.gif',
      '/img/featured2.gif',
      '/img/featured3.gif'

]

// we create a condition for the directions of the pictures
const handleArrow = (direction)=>{
    // if not first index, go back until the first(index o) and then go back to last (index 2)
    if(direction === 'l'){
        setIndex(index !== 0 ? index-1 :2)
    }

    // if the index(picture) is not the last then it should keep on increasing until it reaches the last(2) and if it does, it goes back to the first that is index at 0
    if(direction === 'r'){
        setIndex(index !== 2 ? index+1 : 0)
    }
}
console.log(index)

return (
  
<div className={styles.container}>
    <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow("l")}>
     <Image layout="fill" src={Arrow1} objectFit="contain" alt=""/>
       </div>
     <div className={styles.Wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((image, i)=>( 
                     <div className={styles.imageContainer} key={i} >
        <Image layout="fill" src={image} objectFit="contain" alt=""/>
        </div>
        ))}
                 </div>
     

    <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow("r")}>
     <Image src={Arrow2} layout="fill" objectFit="contain" alt=""/>
     </div>
     
</div>

)
}

export default slider
