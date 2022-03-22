import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function MapMini({ coordinate }) {
  const DBO = useSelector((store) => store.post);
  const id = useParams();
  const ourPost = DBO.filter((el) => el.id === Number(id.id))
  const ourCoord = [ourPost[0].coordinatesX, ourPost[0].coordinatesY]
  // console.log(DBO, id, ourPost[0].coordinatesX);

  return (
    <>
      <YMaps>
        <div>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width="100%">
            <Placemark key={coordinate} geometry={ourCoord} />
          </Map>
        </div>
      </YMaps>
    </>
  );
}

export default MapMini;
