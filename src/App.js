import "./App.css";
import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;

// const counterStore = useSelector((state) => state); // 추가해주세요.
// console.log(counterStore.counter.number); // 스토어를 조회해볼까요?
// // console.log(counterStore.counter.value);

// const [title,setTitle] = useState('');

// const dispatch = useDispatch();

// const onChangeHandler = (event) => {
//   const {value} = event.target;
//   setTitle(value)
//   //console.log(value)
// }

// const submitInput = () => {
//   dispatch(addInput(title));
// }

//   <h1>{ counterStore.counter.number }</h1>
//   <h2>{ counterStore.counter.value }</h2>
//   <button
//   onClick={() => {
//     // 마우스를 클릭했을 때 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달된다.
//     dispatch({ type: "PLUS_ONE" });
//   }}
//   >+1</button>

//   <button
//   onClick={() => {
//     // 마우스를 클릭했을 때 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달된다.
//     dispatch({ type: "MINUS_ONE" });
//   }}
//   >-1</button>

//   <input onChange={onChangeHandler}/>
//   <button onClick={submitInput}>
//     submit
//   </button>
