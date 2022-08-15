import React from 'react';
import styled from 'styled-components';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import { useSelector } from 'react-redux';
import RecipePopUp from './RecipePopUp';
import LikeRecipeFeature from './utils/LikeRecipeFeature';

export default function Liked() {
  const liked = useSelector((state) => state.cart.likes);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [openRecipe, setOpenRecipe] = React.useState(false);
  const [selected, setSelected] = React.useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <HeartIcon
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={handleClick}
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </HeartIcon>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {liked.length === 0 ? (
          <Typography sx={{ p: 2 }}>List is empty.</Typography>
        ) : (
          liked.map((item) => (
            <CardRow key={item.recipe_id}>
              <ListItem
                button
                onClick={() => {
                  setOpenRecipe(true);
                  setSelected(item);
                }}
                key={item.recipe_id}
              >
                <ListItemAvatar>
                  <Avatar alt={item.title} src={item.image_url} />
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.publisher} />
              </ListItem>
              <EmptySpace></EmptySpace>
              <LikeRecipeFeature recipe={item} />
            </CardRow>
          ))
        )}
      </Popover>
      <RecipePopUp
        recipe={selected}
        open={openRecipe}
        setOpen={setOpenRecipe}
      />
    </>
  );
}
const CardRow = styled.div`
  position: relative;
  display: flex;
`;
const EmptySpace = styled.div`
  width: 5rem;
  height: 100%;
  background-color:transparent;
`;
const HeartIcon = styled.svg`
  height: 2.4rem;
  width: 2.4rem;
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
