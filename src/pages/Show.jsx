import React from 'react'
import {useEffect, useState} from 'react';
import styled from "styled-components";
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Show() {

    let params = useParams();
    const [details, setDetails] = useState({}); 

    const fetchDetails = async() => {
        const api = await fetch(`https://api.jikan.moe/v3/anime/${params.name}`);
        const detailData = await api.json();
        setDetails(detailData);
        console.log(detailData)
    }

    useEffect(() => {
        fetchDetails();
    },[params.name]);


  return (<DetailWrapper>
    <div>
        <img src={details.image_url} alt="" />
        <h2>Original Source: {details.source}</h2>
        <h3>Episode Total: {details.episodes}</h3>
    </div>
    <Info>
        <h1>{details.title_english}</h1>
        <h2>Rating: {details.score}</h2>
        <h3><p>{details.synopsis}</p></h3>    
    </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
    margin-bottom: 5rem;
    margin-top:5rem;
    display:flex;
    h2{
        margin-bottom:1.5rem;
    }
    h1{
        font-size:2.5rem;
        margin-bottom:2rem;
    }
    h3{
        color:black;
    }
    img{
        margin-bottom:20px;
    }
    
   
`

const Info = styled.div`
    margin-left:5rem;
    display:
    
`




export default Show