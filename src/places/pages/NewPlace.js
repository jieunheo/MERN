import React, { useCallback, useReducer } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import './PlaceForm.css';

const init = {
  inputs: { // input 값 상태 관리
    title: { // title 값, 유효성
      value: '',
      isValid: false
    },
    description: { // description 값, 유효성
      value: '',
      isValid: false
    },
    address: { // address 값, 유효성
      value: '',
      isValid: false
    }
  },
  isValid: false // 유효성
}

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formValid = true; // 상태 확인을 위한 값
      for(const inputId in state.inputs) { // title, description, address
        if(inputId === action.inputId) {   // title 또는 description 또는 address
          formValid = formValid && action.isValid;         // 해당하는 값 상태 적용
        } else {
          formValid = formValid && state.inputs[inputId].isValid; // 나머지 값은 이전 값으로 적용
        }
      }

      return {
        ...state, // 기존 값
        inputs: {
          ...state.inputs, // 기존 inputs
          [action.inputId]: { // 해당하는 값 id
            value: action.value,
            isValid: action.isValid
          }
        },
        isValid: formValid // 위에서 판별한 상태
      };
    default:
      return state;
  }
}

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, init);

  // 컴포넌트를 렌더링 할 때마다 새로운 함수 객체를 만들지 않고 재사용하기 위한 useCallback
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      inputId: id,
      value: value,
      isValid: isValid
    })
  }, []);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  }

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input 
        id='title'
        element='input' 
        type='text' 
        label='Title' 
        validators={[VALIDATOR_REQUIRE()]} 
        errorText='Please enter a valid title.' 
        onInput={inputHandler}
      />
      <Input 
        id='description'
        element='textarea' 
        label='Description' 
        validators={[VALIDATOR_MINLENGTH(5)]} 
        errorText='Please enter a valid description (at least 5 charactors).' 
        onInput={inputHandler}
      />
      <Input 
        id='address'
        element='input' 
        type='text' 
        label='Address' 
        validators={[VALIDATOR_REQUIRE()]} 
        errorText='Please enter a valid Address.' 
        onInput={inputHandler}
      />
      <Button
        type='submit'
        disabled={!formState.isValid}
      >ADD PLACE</Button>
    </form>
  );
}

export default NewPlace;