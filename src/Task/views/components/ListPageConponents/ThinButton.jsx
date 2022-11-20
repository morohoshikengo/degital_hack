import React from 'react'

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import FilterListIcon from '@mui/icons-material/FilterList';

//フィルターや並び替え

const useStyles = makeStyles({
  customButton: {
    color: '#2ea4b3',
    background: '#F2FAFB',
  },
})


function ThinButton(props) {
    const classes = useStyles()
  return (
<Button variant="outlined" className={classes.customButton} startIcon={props.icon}>
  {props.title}
</Button>
  )
}

export default ThinButton