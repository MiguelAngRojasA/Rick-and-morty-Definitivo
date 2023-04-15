import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "../styles/Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {

    async function inEffect() {
    try {      
        const { data } = await axios(
          `http://localhost:3001/rickandmorty/character/detail/${id}`
        );
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      
    } catch (error) {
      console.log("character update in usseEffect", error);
    }
  }

    inEffect();
    return setCharacter({}); //se ejecuta solo cuando se desmonta y retorna un objeto vacio, para que character quede borrado cuando se salga del detail
  }, [id]);

  return (
    <div className={style.detail} key={character.id}>
      <img src={character.image} alt={character.name} />
      <div>
        
        <h1>Name: {character.name}</h1>
        <h2>Species: {character.species}</h2>
      </div>

      <div className={style.text_contain}>
        <h3>Status:{character.status}</h3>
        <h3>Gender:{character.gender}</h3>
        <h3>Origin:{character.origin}</h3>
        <h3>Location:{character.location}</h3>
      </div>
    </div>
  );
}
