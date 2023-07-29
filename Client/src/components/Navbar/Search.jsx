import { SearchOutlined } from '@mui/icons-material'
import { Box,InputBase,styled } from '@mui/material'
const SearchWrapper = styled(Box)`
    width: 35%;
background: #fff;
    margin-left: 10px;
    display: flex;
`
const Field = styled(InputBase)`
width: 100%;
padding: 0 10px;
font-family: unset;
`
const SearchIconwapper = styled(Box)`
color:#1976d2;
padding: 3px;
cursor: pointer;
`
const Search = () => {
  return (
   <SearchWrapper>
    <Field placeholder='Search for Top Brand and more'/>
    <SearchIconwapper>
      <SearchOutlined/>
    </SearchIconwapper>
   </SearchWrapper>

  )
}

export default Search
