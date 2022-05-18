import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  height: 100px;
  width: 100%;
  background-color: white;
  color: red;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

const Div = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-between;
`

const I = styled.i`
  margin: 5px;
`

const linkStyle = {
    color: "black",
    underline: "none", 
    "textDecoration": "none",
    "backgroundColor": "white", 
    padding: "12px", 
    "borderRadius": "10px",
    "boxShadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px"
}

const logoStyle = {
  "textDecoration": 'none', 
  color: 'black'
}

const Header = () => {
  return (
    <Container>
      <Link style={logoStyle} to="/home"><h1>AposCommunity</h1></Link>
      <Div>
        <Link style={linkStyle} to="/start"><I className="fa-solid fa-location-dot"></I>Start Here!</Link>
        <Link style={linkStyle} to="/projects"><I className="fa-solid fa-pencil"></I>Projects</Link>
        <Link style={linkStyle} to="/login"><I className="fas fa-user"></I>Login</Link> 
      </Div>
    </Container>
  )
}

export default Header