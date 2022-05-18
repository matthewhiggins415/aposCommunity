import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from '../Components/Rating'
import Comment from '../Components/Comment'
import products from '../products'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 80vh;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
`

const ArticleDiv = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 20px;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 15px;
`

const linkStyle = {
    color: "black",
    width: "50px", 
    underline: "none", 
    "textDecoration": "none",
    "backgroundColor": "white", 
    "textAlign": "center", 
    padding: "12px", 
    "borderRadius": "10px",
    "boxShadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    margin: '20px'
  }

const ProjectDetailsScreen = () => {
  const { id } = useParams()
  let project = products.find((p) => p._id === id)

  return (
    <Container>
        <Link style={linkStyle} to='/projects' >Back</Link>

        <ArticleDiv>
          <Div>
            <h1>{project.name}</h1> 
            <h2>{project.description}</h2>         
            <Img src={require(`../images/${project.image}.jpg`)}/>
          </Div>
        <div>
          <h1>Comments:</h1>
          {project.comments.map((comment) => (
            <Comment comment={comment}/>
          ))}
        </div>
        </ArticleDiv>
    </Container>
  )
}

export default ProjectDetailsScreen