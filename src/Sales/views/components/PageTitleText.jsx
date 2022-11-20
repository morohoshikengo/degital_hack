import React from 'react'
import styled from 'styled-components'
const TitleText = styled.div`
font-size:24px;
color:#2ea4b3;
padding:20px;
font-weight
`

function PageTitleText(props) {
  return (
    <TitleText>{props.title}</TitleText>
  )
}

export default PageTitleText