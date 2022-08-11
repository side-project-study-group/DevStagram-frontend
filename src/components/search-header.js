import React from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

const Section = styled.section`
  width: 100%;
  max-width: 480px;
  box-sizing: border-box;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  .search_icon {
    position: absolute;
    margin-left: 10px;
    margin-top: 7px;
    color: #24231f;
    font-size: 20px;
  }
  svg {
    stroke-width: 10;
  }
`;

const SearchContainer = styled.input`
  width: 100%;
  padding: 0;
  height: 30px;
  background-color: #fafaf8;
  border-radius: 5px;
  border: 2px solid #24231f;
  padding-left: 35px;
  font-family: "NotoSansKR";
`;

function SearchHeader() {
  return (
    <Section>
      <IoIosSearch className="search_icon" />
      <SearchContainer placeholder="Search" />
    </Section>
  );
}

export default SearchHeader;
