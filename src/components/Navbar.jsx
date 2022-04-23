import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';

import React from 'react'
import styled from 'styled-components'
import SearchBar from './searchBar';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 70px;
    background-color: #c5f0c5;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 16px;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    color: black;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    margin-left: 25px;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left><Language></Language>
                
                   

                </Left>
                <Center>
                    <Link to='/home' style={{ textDecoration: 'none' }}><Logo>MEDLOC</Logo></Link>
                </Center>
                <Right>
                    <Link to="/registerStore" style={{ textDecoration: 'none' }}><MenuItem>REGISTER STORE</MenuItem></Link>
                    <Link to="/loginStore" style={{ textDecoration: 'none' }}><MenuItem>LOGIN STORE</MenuItem></Link>
                    
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
