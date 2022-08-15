import React from 'react';
import styled from 'styled-components';

import Counter from './Counter';
import LikeRecipeFeature from './LikeRecipeFeature';
import RecipePopUp from '../RecipePopUp';
// import SnackBar from './SnackBar';

import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/features/cartSlice';

export default function RecipeCard({ recipe }) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState('');
  // const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const addToCart = (recipe) => {
    dispatch(addItem(recipe));
  };

  return (
    <>
      <Card>
        <ImageWrap
          onClick={() => {
            setOpen(true);
            setSelected(recipe);
          }}
        >
          <Image src={recipe.image_url} alt={recipe.title} />
        </ImageWrap>

        <div>
          <Title
            onClick={() => {
              setOpen(true);
              setSelected(recipe);
            }}
          >
            {recipe.title.length > 20
              ? recipe.title.substring(0, 20) + '...'
              : recipe.title}
          </Title>
          <Text>{recipe.publisher}</Text>
        </div>
        <CTAWrap>
          {cartItems.map((rec) => rec.recipe_id).includes(recipe.recipe_id) ? (
            <Counter recipe={recipe} />
          ) : (
            <Button
              onClick={() => {
                addToCart(recipe);
                // setOpenSnackbar(true);
              }}
            >
              Add to Cart
            </Button>
          )}
        </CTAWrap>

        <LikeRecipeFeature recipe={recipe} />
      </Card>
      {/* <SnackBar
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        message="Added to cart"
      /> */}

      <RecipePopUp recipe={selected} open={open} setOpen={setOpen} />
    </>
  );
}

const Title = styled.p`
  font-size: .8rem;
  font-family: "Roboto";
  text-align: center;
  margin: 5px;
  cursor: pointer;
`;
const Text = styled.p`
  font-size: .6rem;
  font-family: "Roboto";
  text-align: center;
  color: #666;
`;
const Image = styled.img`
  object-fit: cover;
  display: block;
  margin: 0 auto;
`;
const ImageWrap = styled.div`
  width: 11rem;
  height: 11rem;
  overflow: hidden;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 10rem;
    height: 8rem;
  }
`;
const Card = styled.div`
  // background-color: grey;
  // border: 2px solid #ddd;
  width: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: .5rem;
  padding: .5rem;
  gap: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  position: relative;

  @media only screen and (max-width: 600px) {
    width: 10rem;
  }

`;
const CTAWrap = styled.div`
  margin: 10px;
`;
const Button = styled.button`
& {
  font-size: 12px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 10px 18px 10px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

// &:after {
//   content: "";
//   background-color: #ffe54c;
//   width: 100%;
//   z-index: -1;
//   position: absolute;
//   height: 100%;
//   top: 7px;
//   left: 7px;
//   transition: 0.2s;
// }

// &:hover:after {
//   top: 0px;
//   left: 0px;
// }

  @media only screen and (max-width: 600px) {
    padding: 8px 15px 8px;
    font-weight: 300;
  }
`;
