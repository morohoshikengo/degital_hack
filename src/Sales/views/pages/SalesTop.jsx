import React from 'react'
import SearchJob from '../../../Task/views/components/ListPageConponents/SearchJob'
import ThinButton from '../../../Task/views/components/ListPageConponents/ThinButton'
import PageTitleText from '../components/PageTitleText'
import FilterListIcon from '@mui/icons-material/FilterList';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Button from "../../../login/views/components/Button";
import CliaterListPage from '../components/CliaterListPage';

function SalesTop() {
  return (
    <div className='all' style={{marginLeft:210}}>
  <PageTitleText title = "クリエイター管理"/>
  <Button title ="+クリエイターを追加"></Button>
    <div className='option'>
    <SearchJob title = "案件名・タスク名で検索" width = "250px"/>
   <ThinButton title = "フィルター" icon = <FilterListIcon /> />
   <ThinButton title = "並び替え" icon = <SwapVertIcon /> />
    </div>
    <CliaterListPage/>
    </div>
  )
}

export default SalesTop