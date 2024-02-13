import React, { useState } from "react";
interface FilterProps {
  filters: string[]; // utilisée pour remonter item vers component app
  setOnclick: (filter: string) => void;
}

const filter = ({ filters, setOnclick }: FilterProps) => {
  const [filter, setFilter] = useState("All");
  /*   const handleOnClick = () => {
    setFilter(filteritem)
  } */
  return (
    <>
      <ul className="nav nav-pills">
        {filters.map((filterItem) => (
          <li className="nav-item">
            <a
              className={filter === filterItem ? "nav-link active" : "nav-link"}
              onClick={() => {
                setFilter(filterItem);
                setOnclick(filterItem);
              }}
            >
              {filterItem}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default filter;
