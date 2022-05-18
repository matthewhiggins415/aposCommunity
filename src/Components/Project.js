import React from 'react'
import styled from 'styled-components'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Container = styled.div`
  padding: 20px;
  border: 1px solid black;
  width: 80%;
  margin: 5px auto;
  border-radius: 10px;
  display: flex;
`

const Img = styled.img`
  height: 300px;
  width: 300px;
`

const Div = styled.div`
  padding: 20px;
`

const linkStyle = {
  "textDecoration": "none", 
  color: "black"
}

const Project = ({ project }) => {
  return (
    <Container>
      <Img src={require(`../images/${project.image}.jpg`)} />
      <Div>
        <Link to={`/project/${project._id}`} style={linkStyle}>
          <h1>{project.name}</h1>
        </Link>
        <h2>{project.description}</h2>
        <Rating value={project.rating} text={`${project.numReviews} reviews`} />
        <p>{`${project.numComments} comments`}</p>
      </Div>
    </Container>
  )
}

export default Project