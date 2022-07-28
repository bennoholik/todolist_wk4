import './style.css'

function WorkingBox(props){
   
    if(props.todo[props.i].isDone == false){
    return (
      <div id={props.i} className="todoCard">
      <h2>{props.todo[props.i].title}</h2>
      <p>{props.todo[props.i].body}</p>
     
    <DeleteBtn todo={props.todo} i={props.i} setTodo={props.setTodo}></DeleteBtn>
    
      
      <button
        onClick={() => {
            let copy = [...props.todo];
            copy[props.i].isDone = true;
            props.setTodo(copy);
            console.log(copy.isDone)
        }} id="doneBtn"
      >Done</button>
      </div>
    )} else {
        return null;
    }
  }

  function DoneBox(props){
    
    if(props.todo[props.i].isDone == true){
    return (
      <div id={props.i} className="todoCard" style={{border:"3px solid orange"}}>
      <h2>{props.todo[props.i].title}</h2>
      <p>{props.todo[props.i].body}</p>
     
    <DeleteBtn todo={props.todo} i={props.i} setTodo={props.setTodo}></DeleteBtn>
    
      
      <button
        onClick={() => {
            let copy = [...props.todo];
            copy[props.i].isDone = false;
            props.setTodo(copy);
            console.log(copy.isDone)
        }} id="doneBtn" style={{border:"2px solid green"}}
      >Cancel</button>
      </div>
    )} else {
        return null;
    }
  }

  function DeleteBtn (props){
    return (
    <>
    <button onClick={() => {
        console.log(props.todo[props.i])
        let copy = [...props.todo];
        copy.splice(props.i,1);
        props.setTodo(copy)
        console.log(props.i)
        }} id="doneBtn" style={{border:"2px solid red"}}>Delete</button>
    </>
    )
  }

  export {WorkingBox, DoneBox}


//   {
//     let copy = [...props.todo];
          
//     setTodo(copy);
//   }

// {
//     let copy = [...props.todo];
//     copy.splice(props.i,1);
// }