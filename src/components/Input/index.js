import React from 'react';
import { InputContainer } from './styles.js';

const Input = ({value, onChange}) => {
  return (
    <InputContainer>
        <input type="text" value={value} onChange={onChange}/>
    </InputContainer>
  )
}

export default Input