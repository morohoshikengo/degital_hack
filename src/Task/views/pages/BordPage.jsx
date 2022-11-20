import React from 'react'
import styled from 'styled-components'
import BoardTask from '../components/BoardPageComponents/BoardTask'
import SearchJob from '../components/ListPageConponents/SearchJob'
import ThinButton from '../components/ListPageConponents/ThinButton'
import FilterListIcon from '@mui/icons-material/FilterList';
import SwapVertIcon from '@mui/icons-material/SwapVert';

const BordPageDiv = styled.div`
margin-left:210px;
float:left;
display:flex;
`

function BordPage() {
  return (
    <div>
      <div style={{marginLeft:700}}>
    <SearchJob title = "案件名・タスク名で検索" width = "250px"/>
    <ThinButton title = "フィルター" icon = <FilterListIcon /> />
    <ThinButton title = "並び替え" icon = <SwapVertIcon /> />
    </div>
    <BordPageDiv>    
      <BoardTask/>
      <BoardTask/>
      <BoardTask/>
      <BoardTask/>
    </BordPageDiv>
    </div>

  )
}

export default BordPage