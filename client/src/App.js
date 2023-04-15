import { useState, useEffect } from "react";
import style from "./styles/App.module.css";
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar.jsx";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Form from "./components/Form.jsx";
import Favorites from "./components/Favorites";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addCharacters,
  addLocation,
  searchCharacter,
} from "./redux/actions/actions";
function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  // const EMAIL = "miguel@hotmail.com";
  // const PASSWORD = "bymy123";

  // const [characters, setCharacters] = useState([]);
  const { characters } = useSelector((state) => state);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addLocation(location.pathname));
  }, [dispatch, location]);

  function login(userData) {
    axios
      .get(
        `http://localhost:3001/rickandmorty/login?password=${userData.password}&email=${userData.email}`
      )
      .then(({ data }) => {       
        if (data.access===true) {
          setAccess(true);
          navigate("/home");
          //console.log("estoy pasando por aca y acces esta en:"+ data.access)
        } 
      }).catch(error => {
        const access = error.response.data.access;
        setAccess(access);

        alert("Credenciales incorrectas"); }         
      );
  }
  function logout() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/rickandmorty/character/all`)

      .then((results) => {
        dispatch(addCharacters(results.data));
      });
  }, []);

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  function onSearch(id) {
    axios
      .get(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        // console.log("01:::::", data);

        dispatch(searchCharacter(data));
      }) .catch((error) => {
        alert("No hay personajes con ese ID");
      });
  }

  function onClose(id) {
    const filterCharacters = characters.filter((ch) => ch.id !== id);
    dispatch(addCharacters(filterCharacters));
  }

  return (
    <div className={style.app}>
      {location.pathname === "/" ? null : (
        <NavBar logout={logout} onSearch={onSearch} />
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route path="/home" element={<Cards onClose={onClose} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/favorites"
          element={<Favorites onClose={onClose} />}
        ></Route>

        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
