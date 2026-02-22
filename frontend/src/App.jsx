import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebaseConfig';
import Flashcards from './pages/Flashcards';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

const App = () => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Router>
        <Switch>
          <Route path="/flashcards" component={Flashcards} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/settings" component={Settings} />
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Router>
    </FirebaseAppProvider>
  );
};

export default App;