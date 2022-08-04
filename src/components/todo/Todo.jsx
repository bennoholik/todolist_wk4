import { useDispatch } from "react-redux";
import { deleteTodo, toggleStatusTodo } from '../../redux/modules/todos';
import { Link } from 'react-router-dom';
import styled from "styled-components"

function WorkingBox({todo}){  
  const dispatch = useDispatch();

  const onDeleteTodo = (id) => {
   dispatch(deleteTodo(id))
  }

  const onToggleTodo = (id) => {
    dispatch(toggleStatusTodo(id))
  }
  
    return (
      <StTodoBox key={todo.id}>
       <StP><Link to={`/detail/${todo.id}`}>더보기</Link></StP>
      <StH2>{todo.title}</StH2>
      <StP>{todo.body}</StP>
      <StDelBtn onClick={() => onDeleteTodo(todo.id)}>삭제할겨?</StDelBtn>
      <StDoneBtn onClick={() => onToggleTodo(todo.id)}>
      
      {todo.isDone? "덜끝내소": "끝났소"}
        
      </StDoneBtn>
     
     
      </StTodoBox>
    )
  }

const StTodoBox = styled.div`
    width: 300px;
    height: 250px;
    border: 3px solid green;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    
`;

const StDoneBtn = styled.button`
    width: 70px;
    height: 30px;
    background: blue;
    color: white;
    margin: 10px;
    border-radius: 10px;
    border : none;
`;

const StDelBtn = styled.button`
    width: 70px;
    height: 30px;
    background: red;
    color: white;
    margin: 10px;
    border-radius: 10px;
    border: none;
`

const StH2 = styled.h2`
  text-align: left;
`

const StP = styled.p`
  text-align: left;
`



  export default WorkingBox


