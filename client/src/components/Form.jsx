import React from "react";
import { useState } from "react";
import validation from "./validation";
import style from "../styles/Form.module.css";
import loginImage from '../img/Login.jpg';
import profile from '../img/profile.JPG';
 
export default function Login({ login }) {
  //Crea un estado local llamado userData. Este debe inicializarse como un objeto con las propiedades email y password iguales a un string vacío.
  const [userData, setUserData] = useState({
    email: "miguel@hotmail.com",
    password: "@Model101",
  });

  const [errors, setErrors] = useState({
    // email: "",
    // password: "",
  });

  //Crea una función llamada handleChange que nos permita reflejar el texto ingresado de los inputs en nuestro estado local.

  function handleChange(event) {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    setErrors(validation({ ...userData, [property]: value }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const aux = Object.keys(errors);
    if (aux.length === 0) {
      // enviamos fafafafaf
      setUserData({
        email: "",
        password: "",
      });
      setErrors({
        email: "",
        password: "",
      });
      login(userData);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.imagen}>
      <img className={style.image} src={loginImage} alt="rick and mory"></img>

      </div>
      <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.imgs}>
    <div className={style.container_image}>
      <img src={profile} alt="profile" />
      
    </div>
    <h1> Login page</h1>
  </div>
        <label>Email</label>
        <input
          name="email"
          type="text"
          value={userData.email}
          onChange={handleChange}
        ></input>
        <p className={style.danger}>{errors.email}</p>
        <label>Password</label>
        <input
          name="password"
          type="text"
          value={userData.password}
          onChange={handleChange}
        ></input>
        <p className={style.danger}>{errors.password}</p>
        {Object.keys(errors).length === 0 ? <button>Ingresar</button> : null}
      </form>
    </div>
  );
}

// no olvidar de colocar el onChange={handleChange}></input> por que si no so se actualiza el estado
// con los value={} en los inputs Conecta tu estado local con los inputs correspondientes utilizando la propiedad value.
