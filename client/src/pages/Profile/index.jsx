import AboutMe from "../../components/AboutMe";
import {useState} from "react";
import ProfileProductList from "../../components/ProfileProductList";
import {useSelector} from "react-redux";


export default function ProfilePage() {
    const [typeProduct, setTypeProduct] = useState('active');
    const user = useSelector(state => state.register);

    const handlerActual = () => {
        setTypeProduct('active');
    };

    const handlerArchive = () => {
        setTypeProduct('archive');
    };

    return (
        <main id="main">
            <AboutMe profile={user}/>
            <div className="div-btn-profile">
                <button className="btnproduct" onClick={handlerActual}>
                    Актуальные
                </button>
                <button className="btnproduct" onClick={handlerArchive}>
                    Архивные
                </button>
            </div>
            {typeProduct === 'active' ? (
            <ProfileProductList
                header="Ваши актуальные продукты"
                descriptions="Ниже отображается список добавленных вами продуктов, после завершения сделки кликните на кнопку - снять с публикации"
                type={typeProduct}
                card={'тут передать активные товары'}
            />
            )
              : (
                  <ProfileProductList
                        header="Ваши архивные продукты"
                        descriptions="Ниже отображается список добавленных вами продуктов, после завершения сделки кликните на кнопку - снять с публикации"
                        type={typeProduct}
                        card={'тут передать те товары которые в архиве'}
                  />
                )

            }
        </main>
    )
}