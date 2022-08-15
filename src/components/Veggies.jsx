import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom';

function Season() {
    const[season, setSeason] = useState([]);

    useEffect(() => {
        getSeason();
    },[]);


    const getSeason = async() =>{
    const check = localStorage.getItem('season')

    if(check){
        setSeason(JSON.parse(check));
    }else{
        const api = await fetch(`https://api.jikan.moe/v3/season/2022/summer`);
        const data = await api.json();
        localStorage.setItem('season', JSON.stringify(data.anime));
        setSeason(data.anime);
        
    }
};

 return (
    <div>
        <Wrapper>
            <h3> Summer 2022 Anime </h3>
                <Splide options={{ 
                            perPage: 4,
                            arrows: false,
                            pagination: false,
                    drag: "free",
                    gap: "1rem"

                        }}>
                            {season.map((data) => {
                                return(
                                    <SplideSlide key= {data.mal_id}>
                                    <Card>
                                    <Link to={'/show/'+ data.mal_id}>
                                    <p className = "title">{data.title}</p>
                                    <img src = {data.image_url} alt={data.title} />
                                    <p className = "score"> Rating: {data.score}</p>
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
        border-radius:1.5rem;
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
       margin-bottom:2.5rem;

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
 ;

    }
`;
 
const Gradient = styled.div`
    z-index:3;
    position:absolute;
    border-radius:2rem;
    width: 100%;
    height: 100%;
    background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4));
`;


export default Season