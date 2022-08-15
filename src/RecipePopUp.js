import React, { useState, useEffect } from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import axios from 'axios';
import styled from 'styled-components';

import EmptyPopUp from './utils/EmptyPopUp';
import LikeRecipeFeature from './utils/LikeRecipeFeature';


export default function RecipePopUp({ recipe, open, setOpen }) {
  const [recipeInfo, setRecipeInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRecipe() {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://forkify-api.herokuapp.com/api/get?rId=${recipe.recipe_id}`
        );
        setRecipeInfo(res.data.recipe);
        // console.log(res.data.recipe);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (recipe) {
      setLoading(true);
      setError(false);
      // setRecipeInfo({});
      fetchRecipe();
    }
  }, [recipe]);

  return (
    <>
      {loading ? (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <EmptyPopUp open={open} onClose={() => setOpen(false)}>
          <Grid container spacing={0} columns={16}>
            <Grid item xs={16} sm={10} sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height={380}
                // sx={{ height: 600 }}
                // width="100%"
                image={recipeInfo.image_url}
                alt={recipeInfo.title}
                sx={{ overflow: 'hidden' }}
              />
              <LikeRecipeFeature recipe={recipe} />
              <CardHeader
                sx={{ px: 4, textAlign: 'left' }}
                title={recipeInfo.title}
                subheader={
                  <>
                    <Typography
                      sx={{ mt: 1 }}
                      variant="body2"
                      color="text.secondary"
                    >
                      Published by
                    </Typography>
                    <Link href={recipeInfo.publisher_url} target="_blank">
                      {recipeInfo.publisher}
                    </Link>
                  </>
                }
              />
              <CardActions disableSpacing sx={{ pb: 4, px: 4 }}>
                <Button>
                  <Link
                    href={recipeInfo.source_url}
                    target="_blank"
                    sx={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    HOW TO COOK IT
                  </Link>
                  {/* <Shutter></Shutter> */}
                </Button>
              </CardActions>
            </Grid>
            <Grid item xs={16} sm={6}>
              <CardContent sx={{ px: 1 }}>
                <Typography
                  sx={{ mx: 1 }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Ingredients
                </Typography>
                <List component="div" aria-label="ingredients">
                  {recipeInfo.ingredients?.map((ingredient, idx) => (
                    <div key={idx} >
                      <ListItem sx={{ py: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          {ingredient}
                        </Typography>
                      </ListItem>

                      <Divider light />
                    </div>
                  ))}
                </List>
              </CardContent>
            </Grid>
          </Grid>
        </EmptyPopUp>
      )}
    </>
  );
}

const Button = styled.button`
& {
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 2px solid red;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  transition: 0.2s;
}

// &:after {
//   content: "";
//   background-color: #222;
//   width: 100%;
//   z-index: 0;
//   position: absolute;
//   height: 100%;
//   top: 7px;
//   left: 7px;
//   transition: 0.2s;
// }

&:hover {
  border: 2px solid #ffe54c;
  // color: #ffe54c
}

`;
