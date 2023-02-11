import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material'


const Container = styled.div`
    height: 60px;
    
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items:center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items:center;
  justify-content: space-between;
`;
const Logo = styled.h1`
    font-weight:bold;
    text-algin:center;

`;
const Language = styled.span`
  font-size:14px;
  cursor:pointer;
`;

const Center = styled.div`
flex: 1;
display: flex;
align-items:center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items:center;
  margin-left:25px;
  padding: 5px;
`;

const Input = styled.input`
    border:none;
`;

const Right = styled.div`
flex: 1;
display:flex;
align-items:center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size:40;
    cursor: pointer;
    margin-left:25px;
`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
          <Left>
          <Logo>Market</Logo>
          <Language>EN</Language>
          </Left>
          <Center>
          <SearchContainer>
              <Input />
              <SearchIcon  style={{color:"gray", fontSize:"16px"}}/>
          </SearchContainer>
          </Center>
          <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="secondary">
          <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
          </Right>
      </Wrapper>
   
    </Container>
  );
};

export default Navbar