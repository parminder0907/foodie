import React, { lazy, Suspense, useState } from 'react';
import './style.css';
import CircularProgress from '@mui/material/CircularProgress';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { SearchContext } from './contexts/searchContext';

import Cart from './Cart';
import Search from './Search';
import Footer from './Footer';

const Food = lazy(() => import('./Food'));

export default function App() {
  const [food, setFood] = useState([]);
  const [searchText, setSearchText] = useState('');

  return (
    <>
      <Provider store={store}>
        <Cart
          searchText={searchText}
          setSearchText={setSearchText}
          setFood={setFood}
        />
        <SearchContext.Provider value={[food, setFood]}>
          <Search searchText={searchText} setSearchText={setSearchText} />
          <Suspense fallback={<CircularProgress />}>
            <Food searchText={searchText} />
          </Suspense>
        </SearchContext.Provider>
      </Provider>
      <Footer />
    </>
  );
}
