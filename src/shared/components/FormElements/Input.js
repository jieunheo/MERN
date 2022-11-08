import React, { useReducer, useState } from 'react';

import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'GHANGE':
      return {
        ...state,
        value: action.val,
        isValid: true
      };
    default: 
      return state;
  }

}

const Input = (props) => {
  // const [enteredValue, setentEredValue] = useState('');
  // const [isValid, setIsValid] = useState(false);

  // useReducer(reducer상태 관리를 위한 코드, 초기값)
  const [inputState, dispatch] = useReducer(inputReducer, { value: '', isValid: false });


  const changeHandler = event => {
    dispatch({
      type: 'GHANGE',
      val: event.target.value
    });
  }

  const element = props.element === 'input' ? (
    <input
      id={props.id} 
      type={props.type} 
      placeholder={props.placeholder} 
      onChange={changeHandler} 
      value={inputState.value} 
    />
  ) : (
    <textarea 
      id={props.id} 
      row={props.rows || 3} 
      placeholder={props.placeholder} 
      onChange={changeHandler} 
      value={inputState.value} 
    />
  );
  
  return (
    <div className={`form-control ${!inputState.isValid && 'form-control--invalid'}`} >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  )
};

export default Input;
