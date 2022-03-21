import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  YMaps,
  Map,
  Placemark,
  GeolocationControl,
  Clusterer,
} from "react-yandex-maps";
import DB from "./points.js";
import { useDispatch, useSelector } from "react-redux";
import { PostsThunk } from "../../redux/thunk/ThunkForm";

const mapState = {
  center: [55.751574, 37.573856],
  zoom: 9,
};

export function App() {
  const [cluster, setCluster] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PostsThunk());
  }, []);

  const DBO = useSelector((store) => store.post);
  // console.log(DBO);

  // Москва, улица Новый Арбат, дом 24

  const transformAddress = async () => {
    const responce = await fetch(`https://nominatim.openstreetmap.org/search?q=24+улица+Арбат+Новый%2C+Москва&format=geojson`)
    const data = await responce.json();
    const address = data[0]
    console.log(data.features[0]);
  };

  return (
    <div id="map" className="App">
      <YMaps>
        <Map
          defaultState={mapState}
          width="100%"
          height="100%"
          instanceRef={(ref) => {
            if (ref) {
              ref.events.add("click", (e) => {
                ref.balloon.close();
              });
            }
          }}
          onClick={transformAddress}
        >
          <GeolocationControl />
          <Clusterer
            modules={["clusterer.addon.balloon"]}
            options={{}}
            instanceRef={(ref) => {
              if (ref) {
                setCluster(ref);
              }
            }}
          >
            {DB.map((el) => {
              return (
                <Placemark
                  key={el.id}
                  modules={["geoObject.addon.balloon"]}
                  geometry={el.coords}
                  properties={{
                    balloonContentHeader: el.title,
                    balloonContent: el.description,
                  }}
                />
              );
            })}
          </Clusterer>
        </Map>
      </YMaps>
    </div>
  );
}
