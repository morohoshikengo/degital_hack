import React from 'react'
import { SideBarData } from './SideBarData'
import styled from 'styled-components'

const Sidebar = styled.div`
height: 100%;
width: 200px;
background: #2ea4b3;
position: absolute;

`

const SidebarList = styled.ul`
height: auto;
padding: 0;
width: 100%;
margin-top:0px;
`

const Row = styled.li`
width: 100%;
height: 40px;
display: flex;
color: white;
padding:10px;
&:hover{
  background: white;
  color: #2ea4b3;
}
`




function SideBar() {
  return (
    <Sidebar>
      <SidebarList>
        {SideBarData.map((value,key) => {
          return(
            <Row  key = {key} className = "row" onClick={()=> {
              window.location.pathname = value.link;
            }}> 
              <div>{value.title}</div>
            </Row>
          )
        })}
      </SidebarList>
      </Sidebar>
  )
}

export default SideBar