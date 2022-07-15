import React from "react";
import styled from "styled-components";

function Select({ options }) {
  return (
    <select>
      {options.map((option, i) => {
        return <option key={i}>{option}</option>;
      })}
    </select>
  );
}

export default Select;
