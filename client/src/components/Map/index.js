import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  YMaps,
  Map,
  Placemark,
  GeolocationControl,
  Clusterer
} from "react-yandex-maps";

const mapState = {
  center: [55.751574, 37.573856],
  zoom: 9
};

export function App() {
  const [cluster, setCluster] = useState(null);
  return (
    <div id='map' className="App">
      <YMaps>
        <Map
          defaultState={mapState}
          width="100%"
          height="100%"
          instanceRef={ref => {
            if (ref) {
              ref.events.add("click", e => {
                ref.balloon.close();
              });
            }
          }}
        >
          <GeolocationControl />
          <Clusterer
            modules={["clusterer.addon.balloon"]}
            options={{}}
            instanceRef={ref => {
              if (ref) {
                setCluster(ref);
              }
            }}
          >
            <Placemark
              modules={["geoObject.addon.balloon"]}
              geometry={[55.684758, 37.738521]}
              properties={{
                balloonContentHeader: "Balloon1",
                balloonContent: "Balloon1 <strong>Test</strong>"
              }}
            />
            <Placemark
              modules={["geoObject.addon.balloon"]}
              geometry={[55.8, 37.8]}
              properties={{
                balloonContentHeader: "Balloon2",
                balloonContent: "Balloon2 <strong>Test</strong>"
              }}
            />
            <Placemark
              modules={["geoObject.addon.balloon"]}
              geometry={[55.5, 37.738521]}
              properties={{
                balloonContentHeader: "Balloon3",
                balloonContent: "Balloon3 <strong>Test</strong>"
              }}
            />
            <Placemark
              modules={["geoObject.addon.balloon"]}
              geometry={[55.684758, 37]}
              properties={{
                balloonContentHeader: "Balloon4",
                balloonContent: "Balloon4 <strong>Test</strong>"
              }}
            />
          </Clusterer>
        </Map>
      </YMaps>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


