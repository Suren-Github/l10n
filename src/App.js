import React from 'react';

import Header from './components/header';
import Profile from './components/profile';


import './App.css';

// import strings from './data/locale/localizedStrings'; ? Why can't we import in App.js and use it throughout

function App() {
  return (
    <div className="App">
      <div>
        <h3> i18N (Internationalisation)</h3>
        <Header></Header>
      </div>
      <Profile></Profile>
    </div>
  );
}

export default App;
