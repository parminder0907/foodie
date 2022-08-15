import React, { useState, useContext, useEffect } from 'react';
import { SearchContext } from '../contexts/searchContext';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

export default function FetchSearchResults({ searchText }) {
  const [_, setFood] = useContext(SearchContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchFood() {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://forkify-api.herokuapp.com/api/search?q=${searchText}`
        );
        setFood(res.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (searchText) {
      setLoading(true);
      setError(false);
      setFood([]);
      fetchFood();
    }
  }, [searchText, setFood]);

  return (
    <>
      {loading && (
        <Loader>
          <CircularProgress color="inherit" />
        </Loader>
      )}
      {error && <Text>No results found.</Text>}
    </>
  );
}

const Loader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Text = styled.h1`
  color: #aaa;
  text-align: center;
`;
