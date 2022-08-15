import React from 'react';

import { getRandomSugg } from './utils/SearchList';
import RandomSection from './RandomSection';

export default function ExploreSection() {
  return (
    <>
      <RandomSection randomResult={getRandomSugg()} />
      {/* <RandomSection randomResult={getRandomSugg()} />
      <RandomSection randomResult={getRandomSugg()} /> */}
    </>
  );
}
