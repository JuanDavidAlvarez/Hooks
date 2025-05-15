// App.js
import React from 'react';
import { ColorProvider } from './ColorContext';
import ComponenteHijo from './ComponenteHijo';

function App() {
  return (
    <ColorProvider>
      <ComponenteHijo />
    </ColorProvider>
  );
}

export default App;