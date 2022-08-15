import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';

function Cuisine() {

    const [genre, setGenre] = useState([]);
    let params = useParams();

    const getGenre = async (name) => {
        const api = await fetch(`https://api.jikan.moe/v3/genre/anime/${name}/1`)
        const data = await api.json();
        setGenre(data.anime);
    };

    useEffect(() => {
        getGenre(params.type);
    },[params.type]);



    return <Grid>
        {genre.map((data) => {
            return(
            <Card key={data.mal_id}>
                <Link to={"/show/" + data.mal_id}>
                <img src={data.image_url} alt="" />
                <h4>{data.title}</h4>
                </Link>
            </Card>
            );
        })}
    </Grid> 
}

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

export default Cuisine