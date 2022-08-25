import React from 'react';
import { ThemeContext } from './App';

const Button = () => {
  return (
    <ThemeContext.Consumer>
      {value => (
      <button style={{background: value}}>I am a grey button</button>
      )}
    </ThemeContext.Consumer>
  )
}

export default Button;