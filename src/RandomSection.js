import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

import RecipeCard from './utils/RecipeCard';
import HorizontalScrollBox from './utils/HorizontalScrollBox';

export default function RamdomSection({ randomResult }) {
  const [explore, setExplore] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchRandom() {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://forkify-api.herokuapp.com/api/search?q=${randomResult}`
        );
        setExplore(res.data.recipes);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (randomResult) {
      setLoading(true);
      setError(false);
      setExplore([]);
      fetchRandom();
    }
  }, [randomResult]);
  return (
    <>
      <Spacing>Explore recipes for {randomResult}</Spacing>

      {loading && (
        <Spacing>
          <CircularProgress color="inherit"/>
        </Spacing>
      )}
      {error && <Spacing>Error</Spacing>}
      {!loading && explore && (
        <Spacing>
          <HorizontalScrollBox>
            {explore.slice(0, 10).map((recipe) => (
              <RecipeCard key={recipe.recipe_id} recipe={recipe} />
            ))}
          </HorizontalScrollBox>
        </Spacing>
      )}
    </>
  );
}

const Spacing = styled.div`
  padding: 0 3rem 0 3rem;
  margin: 2rem 0;
  @media only screen and (max-width: 600px) {
    padding: 0 1rem 0 1rem;
    margin: 1rem 0;
  }
`;
