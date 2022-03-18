import "./Map.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { Geocode } from "react-geocode";

export const OurMap = () => {
  const mapData = {
    center: [55.684758, 37.738521],
    zoom: 11,
  };

  const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521],
  ];

  function getCoord(e) {
    const coord = e.ready(function () {
      var myMap = new ymaps.Map("YMapsID", {
        center: [55.733835, 37.588227],
        zoom: 12,
        // Обратите внимание, что в API 2.1 по умолчанию карта создается с элементами управления.
        // Если вам не нужно их добавлять на карту, в ее параметрах передайте пустой массив в поле controls.
        // controls: [],
      });

      var myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {
          balloonContentBody: [
            "<address>",
            "<strong>Офис Яндекса в Москве</strong>",
            "<br/>",
            "Адрес: 119021, Москва, ул. Льва Толстого, 16",
            "<br/>",
            'Подробнее: <a href="https://company.yandex.ru/">https://company.yandex.ru</a>',
            "</address>",
          ].join(""),
        },
        {
          preset: "islands#redDotIcon",
        }
      );

      console.log(coord);
      myMap.geoObjects.add(myPlacemark);
    });
  }

  return (
    <div id="map">
      <YMaps>
        <Map
          defaultState={mapData}
          width="100%"
          height="100%"
          onLoad={getCoord}
        >
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
                ],
              }}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
};
