import React, { useState, useEffect } from 'react'
import Item from '../Item';
import styles from './index.module.css'

export default function Itemlist() {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/items').then(response => response.json()).then(data => setItems(data))
  }, [])

  return (
    <>
    <div className={styles.blank}> </div>
    <div className={styles.cardContainer}>
    {items.map(el => ( <Item className={styles.cardItemList} key={`${el.title}${el.id}`} el={el}/>))}
    </div>
    </>
  )
}
