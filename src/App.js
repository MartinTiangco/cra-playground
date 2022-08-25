import React from 'react';
import Title from './title';
import Button from './button';

export const ThemeContext = React.createContext();

const App = () => {
  return (
    <ThemeContext.Provider value="gray">
      <Title />
      <Button />
    </ThemeContext.Provider>
  );
}

export default App;
