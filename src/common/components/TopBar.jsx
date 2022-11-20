import React from 'react'
import { TopBarData } from './TopBarData'
import styled from 'styled-components'

const TopBarAll = styled.div`
margin-left:200px;
`

const TopBarUl = styled.ul`
width:100%;
overflow: hidden;
list-style: none;
border-bottom:dotted;
border-color:#9E9E9E;
border-width:1px;
float: left;
`

const TopBarLi = styled.li`
background: white;
float: left;
color:#9E9E9E;
margin-right:20px;
`


function TopBar() {
  return (
    <TopBarAll>
    <TopBarUl>
      {TopBarData.map((value,key) => {
          return(
            <TopBarLi key = {key} className = "row" onClick={()=> {
              window.location.pathname = value.link;
            }}>
              <div id = "icon">{value.title}</div>
            </TopBarLi>
          )
        })}
    </TopBarUl>
    </TopBarAll>
  )
}

export default TopBar