import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../../redux/modules/todos";
//import './style.css'

function Form() {
  const [titleVal, setTitleVal] = useState("");
  const [contVal, setContVal] = useState("");

  const dispatch = useDispatch();

  const onReset = () => {
    setTitleVal("");
    setContVal("");
  };

  const onSubmitTodos = (e) => {
    if ((titleVal === "") & (contVal === "")) return;
    dispatch(addTodo(titleVal, contVal));
    onReset();
  };

  return (
    <>
      <StForm id="form">
        <StP>제목</StP>
        <StInput
          onChange={(e) => {
            setTitleVal(e.target.value);
          }}
          value={titleVal}
        />
        <StP>내용</StP>
        <StInput
          onChange={(e) => {
            setContVal(e.target.value);
          }}
          value={contVal}
        />
        <StSubmit
          onClick={() => {
            onSubmitTodos();
          }}
          id="submitBtn"
        >
          글올리랑께
        </StSubmit>
      </StForm>
    </>
  );
}

const StForm = styled.div`
  display: flex;
  background: #dedede;
  width: 100%;
  padding: 40px;
  border-radius: 3%;
`;

const StInput = styled.input`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 5%;
`;

const StSubmit = styled.button`
  width: 150px;
  margin: 10px;
  background-color: #00ff00;
  color: black;
  border-radius: 10px;
  border: none;
`;

const StP = styled.p`
  margin: 20px;
  font-weight: bold;
`;

export default Form;
