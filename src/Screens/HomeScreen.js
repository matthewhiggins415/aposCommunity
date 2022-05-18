import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 80vh;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Div = styled.div`
  width: 480px;
  height: 280px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
`

const HomeScreen = () => {
  return (
    <Container>
      <Div>
        <h1>ApostropheCMS is a powerful, open-sourced tool that feels good to use!</h1>
        <Link to="/start">Launch your first ApostropheCMS project here</Link>  
      </Div>
    </Container>
  )
}

export default HomeScreen