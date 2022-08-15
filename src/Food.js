import React, { useContext } from 'react';
import styled from 'styled-components';

import { SearchContext } from './contexts/searchContext';

import ExploreSection from './ExploreSection';
import RecipeCard from './utils/RecipeCard';

export default function Food({ searchText }) {
  const [food, _] = useContext(SearchContext);

  return (
    <>
      {food.length !== 0 && <Title heading>Found {food.count} recipes.</Title>}
      {searchText === '' && <ExploreSection />}
      <Container>
        {food.recipes?.map((recipe) => (
          <RecipeCard key={recipe.recipe_id}  recipe={recipe} />
        ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 1rem;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, 12rem);
  gap: 1rem;

  @media only screen and (max-width: 600px) {
    gap: 0;
  }  
`;
const Title = styled.p`
  font-size: .8rem;
  font-family: "Roboto";
  text-align: center;
  margin: 5px;
  cursor: pointer;
`;
