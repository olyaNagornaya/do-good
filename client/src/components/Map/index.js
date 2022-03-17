import "./Map.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export const OurMap = () => {
  const mapData = {
    center: [55.684758, 37.738521],
    zoom: 11,
  };

  const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521],
  ];

  return (
    <div id="map">
      <YMaps>
        <Map defaultState={mapData} width="100%" height="100%">
          {coordinates.map((coordinate) => (
            <Placemark
              geometry={coordinate}
              properties={{
                iconContent: "this is iconContent",
                iconCaption: "this is iconCaption",
                hintContent: "this is hintContent",
                balloonContent: "this is balloonContent",
              }}
              modules={["geoObject.addon.hint", "geoObject.addon.balloon"]}
              options={{
                preset: [
                  "islands#blackStretchyIcon", //метка растягивающая
                ]
              }}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
};
