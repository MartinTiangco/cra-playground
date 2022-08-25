import React from 'react';
import { ThemeContext } from './App';

const Title = () => {
  return (
    <ThemeContext.Consumer>
      {value => (
      <h1 style={{color: value}}>I am a grey title</h1>
      )}
    </ThemeContext.Consumer>
  )
}

export default Title;