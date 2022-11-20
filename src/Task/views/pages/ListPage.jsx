import React from 'react'
import SearchJob from '../components/ListPageConponents/SearchJob'
import ThinButton from '../components/ListPageConponents/ThinButton'
import FilterListIcon from '@mui/icons-material/FilterList';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import DownloadIcon from '@mui/icons-material/Download';
import CSVButton from '../components/ListPageConponents/CSVButton'
import Button from "../../../login/views/components/Button";
import ListContent from '../components/ListPageConponents/ListContent';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import styled from 'styled-components'

const FormDiv = styled.div`
white-space: nowrap;
margin-Left:400px;
padding-top:70px;
`


function ListPage() {
  return (
    <div style={{marginLeft:210}}>
      <FormDiv>
  <SearchJob title = "案件名・タスク名で検索" width = "250px"/>
   <ThinButton title = "フィルター" icon = <FilterListIcon /> />
   <ThinButton title = "並び替え" icon = <SwapVertIcon /> />
   <CSVButton title = "CSVダウンロード" icon = <FileUploadIcon /> />
   <Button title ="+チケットを追加"></Button>
   </FormDiv>
   <ListContent />
    </div>
  )
}

export default ListPage