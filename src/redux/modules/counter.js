// src/modules/counter.js

const ADD_INPUT = "ADD_INPUT";

export const addInput = (payload) => {
  return {
    type: ADD_INPUT,
    payload,
  };
}



// 초기 상태값
const initialState = {
  number: 0,
  value: '',
};

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS_ONE":
      return {
        number: state.number +1,
      };
    case "MINUS_ONE":
      return {
        number: state.number -1,
      }
    case ADD_INPUT:
      return {
        value: action.payload,
      }  
      
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;