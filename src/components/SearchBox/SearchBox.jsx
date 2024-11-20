import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const filterValue = e.target.value;
    console.log("Filter value:", filterValue);

    dispatch(changeFilter(filterValue));
  };
  return (
    <>
      <div className={s.search}>
        <p className={s.search_p}>Find contacts by name</p>
        <input className={s.input} type="text" onChange={handleChange} />
      </div>
    </>
  );
};

export default SearchBox;
