import styled from 'styled-components'


function Header(){
    return (
        <StHead className="black-nav" style={{display:"flex", justifyContent: "space-between"}} >
            <h1 style={{ color: "red" }}>할일목록</h1>
            <h2 style={{ color : "yellow", margin : "20px"}}>React</h2>       
        </StHead>
    )

}

const StHead = styled.div`
    display: flex;
    background: black;
    width: 100%;
    color: #fff;
    padding-left: 20px;
  
`

export default Header

