import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styleForm.css";
import { Link } from "react-router-dom";
// import { addCoord } from "./controller";

const Form = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    img: "",
    available: "",
    category: "",
    checkBox: false,
  });
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs, "eto inputs");
  };

  const uploadHandler = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    setInputs({ ...inputs, img: formData });
  };

  const inputCheckBox = (e) => {
    // console.log(e.target.checked);
    setInputs((prev) => {
      return { ...prev, checkBox: e.target.checked };
    });
  };

  const addProdToDB = async (e) => {
    e.preventDefault();
    // const coord = await addCoord(inputs)
    // console.log(coord);
    // setInputs((prev) => {
    //   return { ...prev, coordinate: coord.coordinate}
    // })
    console.log(inputs);
    if (inputs.checkBox === true ) {
      fetch("http://localhost:3001/items/addgood", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(inputs),
      });
    } else {
      e.preventDefault();
      alert("Согласись с нашими условиями платформы!!!");
    }
  };
  const inputAvatarHandler = (e) => {
    const file = e.target.files[0];
    console.log(file);
    uploadHandler(file);
  };

  return (
    <>
      <main id="main"></main>
      {/* <!-- main --> */}

      <div className="main-w3layouts wrapper maindiv">
        {/*<h1>{err}</h1>*/}
        <h1>Добавление продукта</h1>
        <div className="main-agileinfo">
          <div className="agileits-top formdesign">
            <form className="">
              <input
                className="text inputformdecor"
                type="text"
                name="title"
                placeholder="Название"
                required=""
                value={inputs.title}
                onChange={handleChange}
              />
              <input
                className="inputphoto input-file"
                id="file"
                onChange={(e) => inputAvatarHandler(e)}
                accept="image/*"
                type="file"
                name="img"
              />
              <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                {inputs.img ? (
                  <i className="bi bi-check2-square"></i>
                ) : (
                  <i className="icon fa fa-check"></i>
                )}
                <span className="js-fileName">
                  {" "}
                  {inputs.img ? " Фото загружено" : " Загрузить фото"}
                </span>
              </label>
              <select
                className="text email selectformdecor"
                placeholder="Категория"
                value={inputs.category}
                onChange={handleChange}
                name="category"
              >
                <option default>Выберите категорию</option>
                <option value="Food">Продукты</option>
                <option value="Clothers">Одежда</option>
                <option value="Furniture">Мебель</option>
              </select>

              <input
                className="text email inputformdecor"
                type="text"
                name="description"
                placeholder="Описание"
                required=""
                value={inputs.description}
                onChange={handleChange}
              />
              <input
                className="text email inputformdecor"
                type="text"
                name="geolocation"
                placeholder="Город"
                required=""
                value={inputs.geolocation}
                onChange={handleChange}
              />
              <input
                className="text email inputformdecor"
                type="text"
                name="city"
                placeholder="Адрес"
                required=""
                value={inputs.city}
                onChange={handleChange}
              />

              <input
                className="text email inputformdecor"
                type="date"
                name="validUntil"
                placeholder="Действительно до"
                required=""
                value={inputs.validUntil}
                onChange={handleChange}
              />

              <div className="wthree-text">
                <label className="anim">
                  <input
                    name="checkBox"
                    type="checkbox"
                    className="checkbox"
                    required=""
                    onChange={inputCheckBox}
                  />
                  <span className="textoncheckbox">
                    Я согласен с условиями платформы!
                  </span>
                </label>
                <div className="clear"> </div>
              </div>
              <button className="btnlogin" type="submit" onClick={addProdToDB}>
                ДОБАВИТЬ
              </button>
            </form>
            <p>
              Вы передумали? <Link to="/profile"> Выйти</Link>
            </p>
          </div>
        </div>
        <ul className="colorlib-bubbles">
          <li>
            <img className="img-bubbles" src="" />
          </li>
          <li>
            <img className="img-bubbles" src="" />
          </li>
          <li>
            <img className="img-bubbles" src="" />
          </li>
          <li>
            <img className="img-bubbles" src="" />
          </li>
          <li>
            <img className="img-bubbles" src="" />
          </li>
          <li>
            <img className="img-bubbles" src="" />
          </li>
          <li>
            <img className="img-bubbles" src="" />
          </li>
          <li>
            <img className="img-bubbles" src="" />
          </li>
        </ul>
      </div>
      {/* <!-- //main --> */}
    </>
  );
};

export default Form;
