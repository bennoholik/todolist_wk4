import './style.css'

function Header(){
    return (
        <div className="black-nav" style={{display:"flex", justifyContent: "space-between"}} >
            <h1 style={{ color: "red" }}>My Todo List</h1>
            <h2 style={{ color : "yellow", margin : "20px"}}>React</h2>       
        </div>
    )

}

export default Header