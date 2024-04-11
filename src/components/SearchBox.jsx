import React from 'react'
import { FaAngleDown } from 'react-icons/fa6';

const SearchBox = () => {
  return (
    <div id="box">
        <input type="text" id='input' placeholder="Search coordinator" />
        <FaAngleDown />
    </div>
  );
}

export default SearchBox