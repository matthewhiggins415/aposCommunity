import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  border: 1px solid black;
  background-color: lightblue;
  padding-left: 25px;
  border-radius: 10px;
`


const Comment = ({ comment }) => {
  return (
    <Div>
      <h2>{comment.user}</h2>
      <p>{comment.message}</p>
      <p>{comment.likes} likes</p>
    </Div>
  )
}

export default Comment