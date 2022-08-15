import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { addToLikes } from '../redux/features/cartSlice';

export default function LikeRecipeFeature({ recipe }) {
  const likedItems = useSelector((state) => state.cart.likes);
  const dispatch = useDispatch();

  const addToLikesFunc = (recipe) => {
    dispatch(addToLikes(recipe));
  };

  return (
    <>
      <HeartIcon
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill={
          likedItems.map((rec) => rec.recipe_id).includes(recipe.recipe_id)
            ? 'red'
            : 'none'
        }
        viewBox="0 0 24 24"
        stroke={
          likedItems.map((rec) => rec.recipe_id).includes(recipe.recipe_id)
            ? 'red'
            : 'currentColor'
        }
        strokeWidth={1}
        onClick={() => {
          addToLikesFunc(recipe);
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </HeartIcon>
    </>
  );
}

const HeartIcon = styled.svg`
  height: 2.4rem;
  width: 2.4rem;
  position: absolute;
  background-color: #fff;
  border-radius: 1.4rem;
  right: 1rem;
  top: 1rem;
  padding: 6px;
  cursor: pointer;
  transition: all .4s ease;

  &:hover {
    transform: scale(1.1)
  }
  &:active {
    transform: scale(1)
  }
`;
