import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

// 案件名の検索

function SearchJob(props) {
  return (
      <FormControl sx={{ width: props.width }}>
        <InputLabel htmlFor="outlined-adornment-password">{props.title}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            endAdornment={
              <InputAdornment position="end">
                <SearchRoundedIcon/>
              </InputAdornment>
            }
            label={props.title}
          />
        </FormControl>
  )
}

export default SearchJob