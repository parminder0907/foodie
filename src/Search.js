import React from 'react';
import styled from 'styled-components';
import FetchSearchResults from './utils/FetchSearchResults';
import Divider from '@mui/material/Divider';

import Chip from '@mui/material/Chip';
import { SearchList } from './utils/SearchList.js';

const getRandomSugg = () => {
  return SearchList[Math.floor(Math.random() * SearchList.length)];
};

export default function Search({ searchText, setSearchText }) {
  const searchRecipe = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = data.get('searchText');
    if (text) {
      setSearchText(text);
    }
  };

  return (
    <>
      <Wrapper>
        <form onSubmit={searchRecipe}>
          <Input
            type="text"
            name="searchText"
            placeholder="Search 1,000,000 recipes.."
          />
          <Button type="submit">Search</Button>
        </form>
        <br />
        <Suggestion>
          {[
            getRandomSugg(),
            getRandomSugg(),
            getRandomSugg(),
            getRandomSugg(),
          ].map((sugg, idx) => (
            <Chip
              label={sugg}
              variant="outlined"
              sx={{ m: 1, borderRadius: 0 }}
              onClick={() => setSearchText(sugg)}
              key={idx}
            />
          ))}
        </Suggestion>
        {/* <Suggestion>
          {[
            getRandomSugg(),
            getRandomSugg(),
            getRandomSugg(),
            getRandomSugg(),
            getRandomSugg(),
          ].map((sugg, idx) => (
            <Chip
              label={sugg}
              variant="outlined"
              sx={{ m: 1, borderRadius: 0 }}
              onClick={() => setSearchText(sugg)}
              key={idx}
            />
          ))}
        </Suggestion> */}
        {/* <EmptyBox></EmptyBox> */}
      </Wrapper>
      <Divider sx={{ mb: 2 }} />
      <FetchSearchResults searchText={searchText} />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8rem 0 1rem 0;
  margin-bottom: 2rem;
  /* position: relative;
  height: 16rem; */
  // border-bottom: 1px solid #555;
`;
// const EmptyBox = styled.div`
//   width: 100%;
//   background-color: #eee;
//   height: 6rem;
//   position: absolute;
//   bottom: 0;
//   z-index: -2;
// `;
const Suggestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid black;
  min-width: 16rem;

  @media only screen and (max-width: 600px) {
    padding: 10px 15px 10px;
    font-weight: 300;
  }
`;
const Button = styled.button`
& {
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

&:after {
  content: "";
  background-color: #ffe54c;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

&:hover:after {
  top: 0px;
  left: 0px;
}
@media only screen and (max-width: 600px) {
    padding: 10px 15px 10px;
    font-weight: 300;
  }

`;
