import React from 'react'
import styled from 'styled-components'
import SubBoardTask from "./SubBoardTask"
const UniForm = styled.div`
display: flex;
flex-direction: column;
width: 90%;
padding: 20px;
border-radius: 12px;
border-color: gray;
border: 1px solid;
background:#FAFAFA;
`



const UniLabel = styled.label`
text-align: left;
margin:10px 10px;
`


function BoardTask() {
  return (
    <UniForm>
    <UniLabel>未着手</UniLabel>
    <p>+チケットを追加</p>
   <SubBoardTask />
   <SubBoardTask />
   <SubBoardTask />
  </UniForm>
  )
}

export default BoardTask