import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterValue } from "../../redux/filter/filterActions";
import { getFilterValue } from "../../redux/contacts/contactsSelector";

import styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const onHandleChange = (e) => {
    dispatch(updateFilterValue(e.target.value));
  };

  return (
    <div className={styles.filterContainer}>
      <h2>Find contacts by name:</h2>
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filterValue}
        onChange={onHandleChange}
      />
    </div>
  );
};

export default Filter;
