const fetch = require('node-fetch')

const addCoord = async (inputs) => {
  const street = strToArr(inputs.city);
  const response = await fetch(
    `http://api.positionstack.com/v1/forward?access_key=8c60b74a91f924ce61d118ccaafef034&query=${street.homeNum}%20${inputs.geolocation}${street.textAddress}`
  );
  const data = await response.json();
  return {
    coordinate: [data.data[0].latitude, data.data[0].longitude],
  };
};

const strToArr = (arr) => {
  arr = arr.split(",").join("").split(".").join("").split(" ");
  let textAddress = [];
  let homeNum;
  arr.forEach((el) => {
    if (!Number(el)) {
      textAddress.push(`%20${el}`);
    } else if (Number(el)) {
      homeNum = el;
    } else {
      console.log(
        "Косяк в формате строки или столбца:",
        el,
        "и не текст, и не число О_о"
      );
    }
  });
  textAddress = textAddress.join("");
  return { textAddress, homeNum };
};

module.exports = addCoord;
