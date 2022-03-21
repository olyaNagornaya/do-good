import AboutMe from "../../components/AboutMe";
import {useEffect, useState} from "react";
import ProfileProductList from "../../components/ProfileProductList";
import {RegaAction} from "../../redux/actions/postActions";


export default function ProfilePage() {
    const [profile, setProfile] = useState({});
    const [typeProduct, setTypeProduct] = useState('active');

    useEffect(() => {
       // тут нужно брать из базы архивные и актуальные товары и по условию их показывать
        fetch("http://localhost:3001/users/profile", {
            credentials: "include",
        })
            .then((response) => response.json())
            .then((response) => setProfile(response));
    }, [])
    if (profile?.user?.name) {
        RegaAction(profile.user.name);
    }

    const handlerActual = () => {
        setTypeProduct('active');
    };
    const handlerArchive = () => {
        setTypeProduct('archive');
    };
    return (
        <main id="main">
            <AboutMe setProfile={setProfile} profile={profile}/>
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
            />
            )
              : (
                  <ProfileProductList
                        header="Ваши архивные продукты"
                        descriptions="Ниже отображается список добавленных вами продуктов, после завершения сделки кликните на кнопку - снять с публикации"
                        type={typeProduct}
                    />
                )

            }
        </main>
    )
}