import React from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { useSelector, useDispatch } from 'react-redux';
import {
  incrItemQty,
  decrItemQty,
  removeItem,
} from '../redux/features/cartSlice';

export default function Counter({ recipe }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const itemIndex = cart.items
    .map((el) => el.recipe_id === recipe.recipe_id)
    .indexOf(true);
  const itemQty = cart.quantity[itemIndex];

  const addQty = () => {
    dispatch(incrItemQty(itemIndex));
  };
  const reduceQty = () => {
    dispatch(decrItemQty(itemIndex));
  };
  const removeFromCart = (recipe) => {
    dispatch(removeItem(itemIndex));
  };

  return (
    <Wrapper>
      <Count>
        <IconButton disabled></IconButton>
        <IconButton
          aria-label="add"
          disabled={itemQty <= 0}
          onClick={reduceQty}
          size="small"
        >
          <RemoveIcon fontSize="small" />
        </IconButton>
        <Text>
          {itemQty} <TinyText>servings</TinyText>
        </Text>
        <IconButton
          aria-label="add"
          color="secondary"
          disabled={itemQty >= 10}
          onClick={addQty}
          size="small"
        >
          <AddIcon fontSize="small" />
        </IconButton>

        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => removeFromCart(recipe)}
        >
          <CancelIcon fontSize="small" />
        </IconButton>
      </Count>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 8rem;
`;
const Count = styled.div`
  display: flex;
  align-items: center;
  width: 8rem;
  justify-content: space-between;
`;
const Text = styled.div`
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TinyText = styled.p`
  font-size: .6rem;
`;
