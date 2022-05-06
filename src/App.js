import React, { Fragment } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const mainStyle = {
    backgroundColor: '#383838',
  };

  return (
    <Fragment>
      <Header />
      <main style={mainStyle}>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
