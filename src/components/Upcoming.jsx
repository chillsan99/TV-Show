import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom';

function Popular() {
    const[upcoming, setUpcoming] = useState([]);
    useEffect(() => {
        getUpcoming();
    },[]);


    const getUpcoming= async() =>{
    const check = localStorage.getItem('upcoming')

    if(check){
        setUpcoming(JSON.parse(check));
    }else{
        const api = await fetch(`https://api.jikan.moe/v3/season/2022/fall`);
        const data = await api.json();
        localStorage.setItem('upcoming', JSON.stringify(data.anime));
        setUpcoming(data.anime);
        console.log(data.anime);
    }
};  
  
    return(
        <div>
            <Wrapper>
                <h3> Upcoming Anime </h3>
                    <Splide options={{ 
                        perPage: 5,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap: "1rem"}}>


                        {upcoming.map((data) => {
                            return(
                                <SplideSlide key= {data.mal_id}>
                                <Card>
                                <Link to={'/show/'+ data.mal_id}>
                                <p className = "title">{data.title}</p>
                                <img src = {data.image_url} alt={data.title} />
                                </Link>
                                <Gradient />
                                </Card>
                                </SplideSlide>
                            );
                        })}
                </ Splide>
            </Wrapper>    
        </div>
    )
}

const Wrapper = styled.div`
    margin:4rem 0rem;
`

const Card = styled.div`
    min-height:25rem;
    border-radius:2rem
    overflow:hidden;
    position: relative;

    img{
        border-radius:2rem;
        position:absolute;
        left:0;
        width:100%;
        height:100%;
        object-fit:cover;
    }

    p.title{
       position:absolute;
       z-index:10;
       left:50%;
       bottom: 0%;
       transform: translate(-50%, 0%);
       width:100%;
       text-align:center;
       font-weight: 600;
       color:white;
       font-size: 1.5rem;
       height:60%;
       display:flex;
       justify-content:center;
       align-items:center;
       margin-bottom:10px;

    }
    p.score{
        position:absolute;
        z-index:10;
        left:50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        width:100%;
        text-align:center;
        font-weight: 600;
        color:white;
        font-size: 1.2rem;
        height:30%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`;
 
const Gradient = styled.div`
    z-index:3;
    position:absolute;
    border-radius:2rem;
    width: 100%;
    height: 100%;
    background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Popular