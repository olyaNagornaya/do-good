import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './styleForm.css'
import { Link } from "react-router-dom";


const Form = () => {


    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        img: "",
        available: "",
        quantity: "",
        category: "",

    });
    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs, 'eto inputs');

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
                        <form className="" >
                            <input
                                className="text inputformdecor"
                                type="text"
                                name="name"
                                placeholder="Название"
                                required=""
                                // value={inputs.name}
                                // onChange={handleChange}
                            />
                            <select
                                className="text email selectformdecor"
                                placeholder="Категория"
                                // value={inputs.category}
                                // onChange={handleChange}
                                name="category"
                            >
                                <option default>Выберите категорию</option>
                                <option value="Food">Продукты</option>
                                <option value="Clothers">Одежда</option>
                                <option value="Home">Жилье</option>

                            </select>

                            <input
                                className="text email inputformdecor"
                                type="text"
                                name="description"
                                placeholder="Описание"
                                required=""
                                // value={inputs.description}
                                // onChange={handleChange}
                            />
                            {/*<input*/}
                            {/*    className="text email inputformdecor"*/}
                            {/*    type="text"*/}
                            {/*    name="geolocation"*/}
                            {/*    placeholder="Город"*/}
                            {/*    required=""*/}
                            {/*    value={inputs.geolocation}*/}
                            {/*    onChange={handleChange}*/}
                            {/*/>*/}
                            {/*<input*/}
                            {/*    className="text email inputformdecor"*/}
                            {/*    type="text"*/}
                            {/*    name="city"*/}
                            {/*    placeholder="Адрес"*/}
                            {/*    required=""*/}
                            {/*    value={inputs.city}*/}
                            {/*    onChange={handleChange}*/}
                            {/*/>*/}

                            {/*<input className="inputphoto input-file" id="file" onChange={(e) => inputAvatarHandler(e)} accept='image/*' type='file' name='photo' />*/}
                            {/*<label for="file" className="btn btn-tertiary js-labelFile">*/}
                            {/*    {inputs.photo ? <i className="bi bi-check2-square"></i> : <i className="icon fa fa-check"></i>}*/}
                            {/*    <span className="js-fileName"> {inputs.photo ? " Фото загружено" : " Загрузить фото"}</span>*/}
                            {/*</label>*/}

                            <input
                                className="text email inputformdecor"
                                type="text"
                                name="quantity"
                                placeholder="Количество"
                                required=""
                                // value={inputs.quantity}
                                // onChange={handleChange}
                            />

                            <div className="wthree-text">
                                <label className="anim">
                                    <input type="checkbox" className="checkbox" required="" />
                                    <span className="textoncheckbox">
                    Я согласен с условиями платформы!
                  </span>
                                </label>
                                <div className="clear"> </div>
                            </div>
                            <button className="btnlogin">ДОБАВИТЬ</button>
                        </form>
                        <p>
                            Вы передумали? <Link to="/profile"> Выйти</Link>
                        </p>
                    </div>
                </div>
                <ul className="colorlib-bubbles">
                    <li><img className="img-bubbles" src="../../../assets/img/eggplant.svg" /></li>
                    <li><img className="img-bubbles" src="../../../assets/img/pineapple.svg" /></li>
                    <li><img className="img-bubbles" src="../../../assets/img/strawberry.svg" /></li>
                    <li><img className="img-bubbles" src="../../../assets/img/apple.svg" /></li>
                    <li><img className="img-bubbles" src="../../../assets/img/bananas.svg" /></li>
                    <li><img className="img-bubbles" src="../../../assets/img/bell-pepper.svg" /></li>
                    <li><img className="img-bubbles" src="../../../assets/img/broccoli.svg" /></li>
                    <li><img className="img-bubbles" src="../../../assets/img/carrot.svg" /></li>
                    <li><img className="img-bubbles" src="../../../assets/img/fruit.svg" /></li>
                    <li><img className="img-bubbles" src="../../../assets/img/faviconavocado.svg" /></li>
                </ul>
            </div>
            {/* <!-- //main --> */}
        </>
    );
};

export default Form;
