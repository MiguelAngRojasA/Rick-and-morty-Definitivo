import SearchBar from "./SearchBar";
import React from "react";
import style from '../styles/NavBar.module.css'
import imagen1 from '../img/imagen1.png'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCharacters } from "../redux/actions/actions";

export default function NavBar({ onSearch, logout }) {
  const dispatch = useDispatch()
  return (
    <div className={style.nav}>
      <div>
      <img className={style.logo} src={imagen1} alt="rick logo"></img>
      </div>
      <Link to="/home">
      <button onClick={()=> dispatch(resetCharacters())}>Home</button>
      </Link>
      <Link to="/about">
        <button> About</button>
      </Link>
      <Link to="/favorites">
        <button> Favorites</button>
      </Link>
      <SearchBar onSearch={onSearch}></SearchBar>
      <button onClick={logout}>LogOut</button>


    </div>
  );
}
