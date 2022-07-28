import {WorkingBox, DoneBox} from "../todo/Todo";
import './style.css'

function List(props){

    return (
        <>
            <div>
                <h2>Working On..🔥</h2>
                <Working todo={props.todo} setTodo={props.setTodo}></Working>
            </div>
            <div>
                <h2>Done..🎉</h2>
                <Done todo={props.todo} setTodo={props.setTodo}></Done>
            </div>
        </>

    )
}

function Working(props){
    return (
        <>
            <div id="cards">
                {props.todo.map((t, i) => {
                return (
                    <WorkingBox todo={props.todo} setTodo={props.setTodo} i={i}></WorkingBox>
                   
                );
            })}
            </div>
       
        </>
    )
}

function Done(props){
    return (
        <>
            <div id="cards">
                {props.todo.map((t, i) => {
                return (
                    <DoneBox todo={props.todo} setTodo={props.setTodo} i={i}></DoneBox>
                   
                );
            })}
            </div>
       
        </>
    )
}


export default List