import {useDispatch} from "react-redux";
import {ProfileThunk} from "../../redux/thunk/ThunkPosts";
import {useEffect, useState} from "react";
import EditUserModal, {BUTTON_WRAPPER_STYLES} from "../EditFormUser";

export default function AboutMe({profile}) {

    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ProfileThunk())

    }, [])

    const clickHandler = () => {
        setIsOpen(true);
    };

    const handlerCloseModal = () => {
        setIsOpen(false);
    }


    return (
        <>
            {profile && (
                <div style={BUTTON_WRAPPER_STYLES}>
                    <EditUserModal user={profile} onClose={handlerCloseModal} open={isOpen} />
                </div>
            )}
            {/* <!-- ======= Work Process Section ======= --> */}
            <section id="work-process" className="work-process py-5">
                <div className="container">
                    {profile ? (
                        <>
                    <div className="section-title" data-aos="fade-up">
                        <h2>
                            {profile?.username} {profile?.surname}
                        </h2>
                    </div>

                            <div className="row content">
                                <div className="col-md-5" data-aos="fade-right">
                                    <img src={profile?.photo ? profile?.photo : '../../../assets/img/daridobro.jpeg'} className="img-fluid" alt="" />

                                </div>
                                <div className="col-md-7 pt-4" data-aos="fade-left">
                                     {/*<h3>{user?.city}</h3>*/}

                                    <ul>
                                        <li>
                                            <i className="bi bi-house"/> {profile?.city}
                                        </li>
                                        <li>
                                            <i className="bi bi-envelope"/> {profile?.useremail}
                                        </li>
                                        <li>
                                            <i className="bi bi-phone"/> {profile?.phone}
                                        </li>
                                        <li>
                                            {/*<i className="bi bi-check-circle"/> Мои подписки:{" "}*/}
                                            {/*{err}*/}
                                            <br />
                                            {/*{subList.length*/}
                                            {/*    ? subList.map((el) => (*/}
                                            {/*        <>*/}
                                            {/*            <br />{" "}*/}
                                            {/*            <i className="bi bi-bell" key={el._id}></i>{" "}*/}
                                            {/*            {categories[el]}{" "}*/}
                                            {/*            <Link name={el} onClick={handlerDelete}>*/}
                                            {/*                {" "}*/}
                                            {/*                delete*/}
                                            {/*            </Link>*/}
                                            {/*        </>*/}
                                            {/*    ))*/}
                                            {/*    : */}
                                            {/*    "Нет подписок на категории"*/}
                                            {/*// }*/}
                                        </li>
                                        <br />
                                        <button className="btncustom" onClick={clickHandler}>
                                            Изменить личные данные
                                        </button>
                                    </ul>
                                </div>
                            </div>
                        </>
                    ) : (
                        // <Loader />
                        <div>тут должен быть лоудер</div>
                    )}
                </div>
            </section>
            {/* <!-- End Work Process Section --> */}
        </>
    )
}