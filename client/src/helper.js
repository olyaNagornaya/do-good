const category = {
  eat: "islands#blueFoodCircleIcon",
  clothes: "islands#blueFashionCircleIcon",
  furniture: "islands#blueSouvenirsCircleIcon",
  other: "islands#blueStarCircleIcon",
};

export const ourCategory = (category_id) => {
  switch (category_id) {
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
