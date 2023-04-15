import { useState } from "react";
import style from "../styles/SearchBar.module.css";
import { useDispatch } from "react-redux";
import { handleNumber } from "../redux/actions/actions";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(event) {
    setId(event.target.value);
  }

  function submit(event) {
    event.preventDefault();
    navigate("/home");
    onSearch(id);
    dispatch(handleNumber(1));
  }

  return (
    <form onSubmit={submit}>
      <div className={style.search}>
        <input onChange={handleChange} type="search" name="search" value={id} />
        <button type="submit">Search</button>
      </div>
    </form>
  );
}