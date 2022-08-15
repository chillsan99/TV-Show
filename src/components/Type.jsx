import React from 'react'
import {NavLink} from 'react-router-dom';
import styled from "styled-components";
import{AiFillVideoCamera} from 'react-icons/ai';
import{BsFillBookFill} from 'react-icons/bs';

function Type() {
  return (
    <List>
        <SLink to= {"/"}>
        <AiFillVideoCamera/>
        <h4>Anime</h4>
        </SLink>

        <SLink to= {"/"}>
        <BsFillBookFill/>
        <h4>Manga</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display:flex;
    justify-content:center;
`

const SLink = styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:12%;
    margin-right: 2rem;
    text-decoration:none;
    background:linear-gradient(35deg, #494949, #313131);
    width:100rem;
    height:5rem;
    cursor:pointer;
    transform: scale(0.7);

    h4{
        font-size: 0.9rem;
        color:white;
    }
    svg{
        color:white;
        font-size:1.5rem;
    }

    &.active{
        background: linear-gradient(to right, #21c8f2, #4076e9)
    }
        
`

export default Type