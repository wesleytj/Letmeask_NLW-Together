import { createContext, useState, useEffect } from 'react';
import { Home } from "./pages/Home";

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { NewRoom } from "./pages/NewRoom";
import { auth, firebase } from './services/firebase';
import { AuthContextProvider } from './context/AuthContext';
import { Room } from './pages/Rooms';



function App() {
  

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
