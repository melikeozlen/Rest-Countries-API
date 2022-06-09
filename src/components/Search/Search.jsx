import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {BiSearchAlt2} from 'react-icons/bi'
import { AiOutlineDown } from 'react-icons/ai'


const SearchStyled = styled.div`
width: 80%;
margin: 3rem auto;
display: flex;
justify-content: space-between;
@media (max-width: 500px) {
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

`;
const InputBox = styled.div`
width: 35%;
min-width: 13rem;
display: flex;
justify-content: space-between;
align-items: center;
gap: 0.5rem;
background: ${props => props.theme.elements};
padding: 0.65rem;
color: ${  props => props.theme.input ? props.theme.input : '#999'};
border-radius: 0.3rem;
box-shadow: 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.1);
&:first-child{
  font-size: 1.5rem;
}
@media (max-width: 500px) {
  width: 90%;
}
`;

const Input = styled.input`
border: 0;
outline: none;
height: 2rem;
padding: 1rem;
width: 100%;
color: ${  props => props.theme.input ? props.theme.input : '#999'};
background-color: transparent;
`;
const DropBox = styled.div`
width: 12rem;
display: flex;
justify-content: space-around;
align-items: center;
padding: 1rem;
position:relative;
background: ${props => props.theme.elements};
box-shadow: 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.1);
cursor: pointer;
border-radius: 0.3rem;
`;
const DropBoxItem = styled.div`
position: absolute;
top: 3.5rem;
display: flex;
flex-direction: column;
z-index: 2;
width: 100%;
height: max-content;
background: ${props => props.theme.elements};
box-shadow: 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.1);
border-radius: 0.3rem;

`;
const DropBoxItemButton = styled.button`
background-color: transparent;
border: 0;
width: 100%;
height: 2.7rem;
cursor: pointer;
color: ${  props => props.theme.input ? props.theme.text : '#999'};
&:hover{
  background: ${props => props.theme.background};
}
`;
const ButtonSearch = styled.button`
background-color:  ${  props => props.theme.background };
padding: 0.3rem;
box-shadow: 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.1);
border-radius: 0.3rem;
color: ${  props => props.theme.text };
cursor: pointer;
border: 0;
outline: none;
`;
const Search = ({callback}) => {
const [showDropBox, setShowDropBox] = useState(false);
const [region, setRegion] = useState('');
const [search, setSearch] = useState('');
const sendData = () => {
  setSearch('');
  callback("region/"+region);    
}
const inputfill = () => {
  if (search === '') {
    alert("Please fill in the search field");
  }
 else {
   callback("name/"+search)

} 
}
useEffect(() => {
sendData();
}, [region]);
  return (
    <SearchStyled>
      <InputBox>
      <BiSearchAlt2/>
        <Input type="text" placeholder="Search for a city..." onChange={(e)=> setSearch(e.target.value)} value={search}/>
      <ButtonSearch onClick={inputfill}>serach</ButtonSearch>
      </InputBox>
      <DropBox  onClick={()=> showDropBox ===true ? setShowDropBox(false) : setShowDropBox(true) }>
        {
          region.length > 0  ?<span>{region}</span> : <span>Filter by region</span> 
        }
        <AiOutlineDown/>
      {
        showDropBox &&  
      
      <DropBoxItem className='dropbox'>
          <DropBoxItemButton onClick={()=> setRegion('Africa')}>Africa</DropBoxItemButton>
          <DropBoxItemButton onClick={()=> setRegion('America')}>America</DropBoxItemButton>
          <DropBoxItemButton onClick={()=> setRegion('Asia')}>Asia</DropBoxItemButton>
          <DropBoxItemButton onClick={()=> setRegion('Europe')}>Europe</DropBoxItemButton>
          <DropBoxItemButton onClick={()=> setRegion('Oceania')}>Oceania</DropBoxItemButton>

      </DropBoxItem>
      }
      </DropBox>
    </SearchStyled>
  )
}

export default Search