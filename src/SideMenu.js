import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

import styled from 'styled-components';
import { SearchList } from './utils/SearchList';
import Logo from './utils/Logo';

export default function SideMenu({ searchText, setSearchText }) {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => () => {
    setState(!state);
  };

  return (
    <div>
      <MenuIcon
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        onClick={toggleDrawer()}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h7"
        />
      </MenuIcon>

      <Drawer anchor="left" open={state} onClose={toggleDrawer()}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer()}>
          <LogoBox>
            <Logo />
          </LogoBox>
          <Divider />
          <ListItem sx={{ fontWeight: 900 }}>Explore</ListItem>
          <Divider />
          <List>
            {SearchList.slice(0, 12).map((text, idx) => (
              <ListItem key={idx} disablePadding>
                <ListItemButton onClick={() => setSearchText(text)}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />

          <LogoBox>
            <ListItem
              sx={{ fontSize: 12, px: 1, borderLeft: '3px solid red', ml: 2 }}
            >
              <Link
                href="https://www.linkedin.com/in/parminder0907/"
                target="_blank"
              >
                Parminder Singh
              </Link>
            </ListItem>
          </LogoBox>
          {/* <Divider /> */}
        </Box>
      </Drawer>
    </div>
  );
}

const MenuIcon = styled.svg`
  height: 2rem;
  width: 2rem;
  cursor: pointer;
`;
const LogoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;
