import { useSelector } from "react-redux";
import styled from "styled-components";
import WorkingBox from "../todo/Todo";


function List(){

    const todos = useSelector((state) => state.todos.todos);
    console.log(todos)

    return (
        <>
            <div>
                <StH2>하는중이올시다</StH2>
                <StCards>
                { 
                    todos.map((todo) => {
                        if(!todo.isDone){
                            return <WorkingBox todo={todo}></WorkingBox>
                        } else {
                            return null;
                        }
                    })
                }
                </StCards>

                <StH2>끝났수다</StH2>
                <StCards>
                {
                    todos.map((todo) => {
                        if(todo.isDone){
                            return <WorkingBox todo={todo}></WorkingBox>
                        } else {
                            return null;
                        }
                    })
                }
                </StCards>
            </div>
        </>

    )
}


const StH2 = styled.h2`
    text-align: left;
    margin-left: 20px;
`

const StCards = styled.div`
    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
    align-items: center;
    justify-content: left;
`


export default List