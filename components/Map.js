import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiZmFpc2FsLWZlcm96ZSIsImEiOiJja3ZwamhjaXUxNTF5MzJtbzRpcDh1czN1In0.ghm3r1V3jbSK34Wa_8qIdw';

const Map = () => {

    useEffect(() => {

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [90.399452, 23.777176],
            zoom: 10,
        });

    }, [])


    return (
        <Wrapper id="map"></Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
    flex-1
`


