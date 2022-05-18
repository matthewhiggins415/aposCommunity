import React from 'react'
import products from '../products'
import styled from 'styled-components'
import Project from '../Components/Project'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const H2 = styled.h2`
  margin: 20px auto;
`

const ProjectScreen = () => {
  return (
    <Container>
        <H2>Latest Projects</H2>
        {products.map((project, index) => (
          <Project project={project} key={index}/>
        ))}
    </Container>
  )
}

export default ProjectScreen