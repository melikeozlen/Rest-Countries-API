import React, {useState } from "react";
import styled from "styled-components";
import Search from "../Search/Search";
import Countries from "../Countries/Countries";

const MainComponents = styled.div`
  background-color: var(--very-lightGray);
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: max-content;
`;
const Main = () => {
  const [country, setCountry] = useState("Africa");
  const mainCallbackFunction = (childData) => {
    setCountry(childData);
  };

  return (
    <MainComponents>
      <Search callback={mainCallbackFunction} />
      <Countries continent={country} />
    </MainComponents>
  );
};

export default Main;
