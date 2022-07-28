import {useState} from 'react'
import './style.css'


function Form(props) {
    let [titleVal, setTitleVal] = useState('');
    let [contVal, setContVal] = useState('');

    let [id, setId] = useState(0);

    const onReset = () => {
        setTitleVal('');
        setContVal('');
    }

  return (
    <>
      <div className="form" id="form">
        <p>제목</p>
        <input
          onChange={(e) => {
            setTitleVal(e.target.value);
          }} value={titleVal}
        />
        <p>내용</p>
        <input
          onChange={(e) => {
            setContVal(e.target.value);
          }} value={contVal}
        />
        <button
          onClick={() => {
            let copy = [...props.todo];
            setId(id+1)
            copy.push(
              {
                id: id,
                title: titleVal,
                body: contVal,
                isDone: false,
              }
            );

            props.setTodo(copy)

            onReset()

            
          }} id="submitBtn"
        >
          Post
        </button>
      </div>
    </>
  );
}

export default Form;
