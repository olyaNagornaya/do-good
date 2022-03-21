import React from 'react'
import styles from './index.module.css'

export default function Item({el}) {
  return (
    <>
    <div className="mycard card">
    <img className="card-img-top" src={el.img} alt={el.title} />
    <div className="card-body">
    <h5 className="card-title">{el.title}</h5>
    <p className="card-text">{el.description}</p>
    <a href="#" className="btn btn-primary">Получить добро</a>
  </div>
</div>
</>
  )
}
