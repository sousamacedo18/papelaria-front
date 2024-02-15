
// App.js
import React from 'react';
import Rotas from './routes';
import { AuthProvider } from './AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  );
};

export default App;
