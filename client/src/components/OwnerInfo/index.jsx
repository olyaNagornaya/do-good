import React, { useState, useEffect } from "react";

function OwnerInfo({ id }) {
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch(`/profile/${id}`)
            .then((res) => res.json())
            .then((res) => setUser(res));
    }, []);
    return (
        <>
            <main id="main">
                {/* <!-- ======= Our Skills Section ======= --> */}
                <section id="skills" className="skills section-bg">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Об авторе</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-6" data-aos="fade-right">
                                <img src={user.img} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <h3>{user.name}&nbsp;{user.surname}</h3>
                                <p>Свяжитесь с автором, позвонив ему по телефону, или отправьте личное сообщение</p>
                                <a href={`tel:${user.phone}`}  >
                                    <i className="bi bi-phone"></i>
                                    {user.phone}
                                </a>
                                <br />



                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Our Skills Section --> */}
            </main>
        </>
    );
}

export default OwnerInfo;
