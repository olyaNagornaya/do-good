import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';

function MapMini({ coordinate }) {

    let coordinateFromdb = coordinate?.split(' ').map(el => Number(el)).reverse()
    const coordinates = [coordinateFromdb];

    return (
        <>
            <YMaps>
                <div>
                    <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width="100%" >
                        {coordinates.map(coordinate => <Placemark key={coordinate} geometry={coordinate}  />)}
                    </Map>
                </div>
            </YMaps>

        </>
    )
}

export default MapMini
