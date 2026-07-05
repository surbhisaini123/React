import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
const SearchBox = () => {
  return (
    <div>
      <div>
          <TextField id="filled-basic" label="Filled" variant="filled"  />
          <button> <ManageSearchIcon/> </button>
      </div>
   
      

    
    </div>
  )
}

export default SearchBox
