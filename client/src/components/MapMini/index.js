import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function MapMini() {
  const DBO = useSelector((store) => store.post);
  const id = useParams();
  const ourPost = DBO.filter((el) => el.id === Number(id.id));
  const ourCoord = [ourPost[0].coordinatesX, ourPost[0].coordinatesY];
  const ourPostTitle = ourPost[0].title;
  const ourPostDesription = ourPost[0].description;
  const category = {
    eat: "islands#blueFoodCircleIcon",
    clothes: "islands#blueFashionCircleIcon",
    furniture: "islands#blueSouvenirsCircleIcon",
    other: "islands#blueStarCircleIcon",
  };
  const ourCategory = () => {
    switch (ourPost[0].category_id) {
      case 1:
        return category.eat;
      case 2:
        return category.clothes;
      case 3:
        return category.furniture;
      default:
        return category.other;
    }
  };

  return (
    <>
      <YMaps>
        <div>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width="100%">
            <Placemark
              key={Number(id.id)}
              modules={["geoObject.addon.balloon"]}
              geometry={ourCoord}
              properties={{
                balloonContentHeader: ourPostTitle,
                balloonContent: ourPostDesription,
              }}
              options={{
                preset: [
                  ourCategory()
                ],
              }}
            />
          </Map>
        </div>
      </YMaps>
    </>
  );
}

export default MapMini;
