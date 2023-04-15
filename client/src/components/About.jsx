import React from 'react'
import Aboutimg from '../img/about.jpg'
import style from "../styles/About.module.css";

export default function About() {
  return (
    <div className={style.container}>
     
      <img src={Aboutimg} alt="rick and mory"></img>

    </div>
  )
}
