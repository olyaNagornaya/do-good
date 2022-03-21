import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  YMaps,
  Map,
  Placemark,
  GeolocationControl,
  Clusterer,
} from "react-yandex-maps";
import DB from "./points.js";

const mapState = {
  center: [55.751574, 37.573856],
  zoom: 9,
};



export function App() {
  const [cluster, setCluster] = useState(null);
  const [address, setAddress] = useState([]);

  //Москва, улица Новый Арбат, дом 24

  // fetch(
  //   `https://nominatim.openstreetmap.org/search?q=24+Новый+Арбат%2C+Москва&format=geojson`
  // )
  //   .then((resp) => {
  //     return resp.json();
  //   })
  //   .then((data) => console.log(data));

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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
