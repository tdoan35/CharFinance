import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './components/Main';

const App = () => {

  return (
    <div>
      <Switch>
        <Route path="/dashboard">
          <Main />
        </Route>
      </Switch>
    </div>
  )
}

export default App
