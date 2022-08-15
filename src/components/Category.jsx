import{FaRegLaughBeam, FaHeartbeat} from 'react-icons/fa';
import {GiShiningSword,GiPistolGun, GiSoccerBall} from "react-icons/gi";
import {ImPlus} from "react-icons/im";
import styled from "styled-components";
import {NavLink} from 'react-router-dom';


function Category() {
  return (
    <List>
        <SLink to = {"/genre/1"}>
            <GiPistolGun/>
            <h4>Action</h4>
        </SLink>
        <SLink to = {"/genre/2"}>
            <GiShiningSword/>
            <h4>Adventure</h4>
        </SLink>
        <SLink to = {"/genre/22"}>
            <FaHeartbeat/>
            <h4>Romance</h4>
        </SLink>
        <SLink to = {"/genre/4"}>
            <FaRegLaughBeam/>
            <h4>Comedy</h4>
        </SLink>
        <SLink to = {"/genre/30"}>
            <GiSoccerBall/>
            <h4>Sports</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display:flex;
    justify-content:center;
    margin:2rem 0rem;
`

const SLink = styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    margin-right: 2rem;
    text-decoration:none;
    background:linear-gradient(35deg, #494949, #313131);
    width:6rem;
    height:6rem;
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
export default Category