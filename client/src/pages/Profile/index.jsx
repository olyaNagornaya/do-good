import AboutMe from "../../components/AboutMe";
import {useEffect, useState} from "react";
import ProfileProductList from "../../components/ProfileProductList";

export default function ProfilePage() {
    const [activeProduct, setActiveProduct] = useState('active');

    useEffect(() => {
       // тут нужно брать из базы архивные и актуальные товары и по условию их показывать
    }, [])
    const handlerActual = () => {
        setActiveProduct('active');
    };
    const handlerArchive = () => {
        setActiveProduct('archive');
    };
    return (
        <main id="main">
            <AboutMe />
            <div className="div-btn-profile">
                <button className="btnproduct" onClick={handlerActual}>
                    Актуальные
                </button>
                <button className="btnproduct" onClick={handlerArchive}>
                    Архивные
                </button>
            </div>
            <ProfileProductList
                header="Ваши актуальные продукты"
                descriptions="Ниже отображается список добавленных вами продуктов, после завершения сделки кликните на кнопку - снять с публикации"
                type={activeProduct}
            />
        </main>
    )
}