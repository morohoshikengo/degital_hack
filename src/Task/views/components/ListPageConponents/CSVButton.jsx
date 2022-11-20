import React from 'react'

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import FilterListIcon from '@mui/icons-material/FilterList';

// CSVダウンロードボタン

const useStyles = makeStyles({
  customButton: {
    color: '#D1D1D1',
    background: 'white',
  },
})


function CSVButton(props) {
    const classes = useStyles()
  return (
<Button variant="outlined" className={classes.customButton} startIcon={props.icon}>
  {props.title}
</Button>
  )
}

export default CSVButton