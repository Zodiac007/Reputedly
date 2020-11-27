import React from 'react';
import Nav from './components/Nav';
import Model from './components/Model';
import UserProvider from './components/UserProvider';


function App() {
  return (
    <>
      <UserProvider>
        <Nav />
        <Model />
      </UserProvider>
    </>

  );
}

export default App;
