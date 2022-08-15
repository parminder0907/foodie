import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import PersonIcon from '@mui/icons-material/Person';

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled as MUIstyled } from '@mui/material/styles';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import Counter from './utils/Counter';

const StyledBadge = MUIstyled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function SimpleDialog({ onClose, open, cart }) {
  return (
    <Dialog onClose={() => onClose()} open={open} fullWidth>
      <DialogTitle>Cart Items</DialogTitle>

      {cart.items.length === 0 ? (
        <ListItem>
          <ListItemText
            sx={{ m: 1, mb: 2 }}
            primary="Start adding items to the cart"
          />
        </ListItem>
      ) : (
        <List sx={{ pt: 0 }}>
          {cart.items.map((item, idx) => (
            <ListItem key={item.recipe_id}>
              <ListItemAvatar>
                <Avatar alt={item.title} src={item.image_url}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                secondary={item.publisher}
                primary={item.title.length > 20
                  ? item.title.substring(0, 20) + '...'
                  : item.title}
              />
              <Counter recipe={item} />
            </ListItem>
          ))}
          <Divider />
          <ListItem>
            <ListItemText
              primary={`Total servings: ${cart.quantity.reduce(
                (prev, curr) => prev + curr,
                0
              )}`}
            />
          </ListItem>
          <Divider />
          {cart.items.map((item, idx) => (
            <ListItem key={item.recipe_id}>
              <ListItemText
                primary={`₹ ${Math.floor(item.social_rank)} * ${
                  cart.quantity[idx]
                }`}
                secondary={item.title}
              />
              ₹ {Math.floor(item.social_rank) * cart.quantity[idx]}
            </ListItem>
          ))}

          <Divider />

          <ListItem sx={{ p: 2, fontWeight: 900 }}>
            <ListItemText primary="Net Amount" />₹{' '}
            {cart.items
              .map(
                (item, idx) => Math.floor(item.social_rank) * cart.quantity[idx]
              )
              .reduce((prev, curr) => prev + curr, 0)}
          </ListItem>

          <CenterDiv>
            <Button disabled={cart.items.length === 0}>BUY NOW</Button>
          </CenterDiv>

          <p></p>
        </List>
      )}
    </Dialog>
  );
}

export default function PopUp() {
  const [open, setOpen] = React.useState(false);
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <IconButton aria-label="cart" onClick={() => setOpen(true)}>
        <StyledBadge
          badgeContent={cart.quantity.reduce((prev, curr) => prev + curr, 0)}
          color="secondary"
        >
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>

      <SimpleDialog cart={cart} open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

const Button = styled.button`
& {
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 2px solid #ffe54c;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  transition: 0.2s;
  background-color: #ffe54c;
  margin: 0 0 1rem 0;
}

&:hover {
  border: 2px solid #222;
  // color: #ffe54c
}

`;

const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
