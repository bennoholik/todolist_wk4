import {useState} from "react"
import Header from "../header/Header"
import List from "../list/List";
import Form from "../form/Form";
import './style.css'


function Layout(){
    let [todo, setTodo] = useState([]);


    return (
        <div className="layout">
            <Header/>
            <Form todo={todo} setTodo={setTodo} />
            <List todo={todo} setTodo={setTodo} />
        </div>
    )
}

export default Layout