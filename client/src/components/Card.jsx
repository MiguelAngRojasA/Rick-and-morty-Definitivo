import style from "../styles/Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../redux/actions/actions";
import { useState } from "react";
import { useEffect } from "react";

export default function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose } = props;
  const dispatch = useDispatch();
  const { myFavorites } = useSelector((s) => s);
  // se está extrayendo el estado myFavorites del estado global s y asignándolo a la variable myFavorites. Esto permite acceder al estado de los favoritos desde el componente donde se está utilizando el useSelector.

  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id))
      console.log("si pasa por aca en remove");
    } else {
      setIsFav(true);
      dispatch(addFav(props));
      console.log("si pasa por aca en fav");
    }
  }
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  function superClouse() {
    onClose(id);
    dispatch(removeFav(id));
  }
  return (
    <div className={style.card}>
      <div className={style.head_card}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        <button onClick={superClouse}>X</button>
      </div>
      <Link className={style.link} to={`/detail/${id}`}>
        <div className={style.body_card}>
          <h1>{name}</h1>
          <h2>{status}</h2>
          <h2>{species}</h2>
          <h2>{gender}</h2>
          <h2>{origin}</h2>
        </div>

        <img src={image} alt={name} />
      </Link>
    </div>
  );
}

// function mapStateToProp(state) {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }
// function mapDispatchToProp(dispatch) {
//   return {
//     addFav: (ch) => dispatch(addFav(ch)),
//     removeFav: (id) => dispatch(removeFav(id)),
//   };
// }

// export default connect(mapStateToProp, mapDispatchToProp)(Card);
