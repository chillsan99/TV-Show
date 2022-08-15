import React from 'react';
import {useEffect, useState} from 'react';
import {Link , useParams} from 'react-router-dom';
import styled from 'styled-components';


function Searched() {

    const [searchedSeries, setSearchedSeries] = useState([]);
    let params = useParams();

     const getSearch = async (name) => {
        const api = await fetch(`https://api.jikan.moe/v3/search/anime?q=${name}&genre_exclude=0&sort=asc&page=1`)
        const data = await api.json();
        setSearchedSeries(data.results);
    };

    useEffect(() => {
        getSearch(params.search);
    },[params.search]);


  return (  
    <Grid>
        {searchedSeries.map((data) => {
            return(
            <Link to={"/show/" + data.mal_id}>
            <Card key={data.mal_id}>
                <img src={data.image_url} alt="" />
                <h4>{data.title}</h4>
                <h4>Rating: {data.score}</h4>
            </Card>
            </Link>
            );
        })}
    </Grid> 
  )
};

    const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap:3rem;
    `

    const Card = styled.div`
        img{
            width:100%;
            border-radius:2rem;
        }

        a{
            text-decoration:none;
        }

        h4{
            text-align:center;
            padding:1rem;
        }
    `
export default Searched