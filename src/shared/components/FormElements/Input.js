import React, { useReducer, useState, useEffect } from 'react';

import { validate } from '../../util/validators';
import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'GHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case 'TOUCH':
      return {
        ...state,
        isTouched: true
      }
    default: 
      return state;
  }

}

const Input = (props) => {
  // const [enteredValue, setentEredValue] = useState('');
  // const [isValid, setIsValid] = useState(false);

  // useReducer(reducer상태 관리를 위한 코드, 초기값)
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value || '', 
    isValid: props.valid || false, 
    isTouched: false 
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;
  useEffect(() => {
    onInput(id, value, isValid)
  }, [onInput, id, value, isValid]);

  const touchHandler = () => {
    dispatch({ type: 'TOUCH' });
  }

  const changeHandler = event => {
    dispatch({
      type: 'GHANGE',
      val: event.target.value,
      validators: props.validators
    });
  }

  const element = props.element === 'input' ? (
    <input
      id={props.id} 
      type={props.type} 
      placeholder={props.placeholder} 
      onChange={changeHandler} 
      value={inputState.value} 
      onBlur={touchHandler}
    />
  ) : (
    <textarea 
      id={props.id} 
      row={props.rows || 3} 
      placeholder={props.placeholder} 
      onChange={changeHandler} 
      value={inputState.value} 
      onBlur={touchHandler}
    />
  );
  
  return (
    <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`} >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  )
};

export default Input;
