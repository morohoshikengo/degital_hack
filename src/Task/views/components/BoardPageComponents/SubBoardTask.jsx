import React from 'react'
import styled from 'styled-components'

const SubForm = styled.div`
padding: 0px;
border-radius: 5px;
border: 1px solid grey;
background:white;
width:100%;
margin:20px 0 0 20px;
`

const Lebel = styled.div`
padding: 0px;
border-radius: 5px;
border: 1px solid #D1D1D1;
width:30%;
margin:10px;
color:#9E9E9E;
`

const Explanation = styled.label`
text-align: left;
margin:10px 10px;
color:#9E9E9E;
`


function SubBoardTask() {
  return (
    <div>
    <SubForm>タスク名タスク名タスク名
        <Lebel>レベル1</Lebel>
        <Explanation>12/10 プロジェクト名</Explanation>
    </SubForm>
    </div>
  )
}

export default SubBoardTask