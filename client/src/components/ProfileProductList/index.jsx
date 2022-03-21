import ProfileProductCard from "../ProfileProductCard";

export default function ProfileProductList({header, descriptions, type}) {

    // взять из редакса данные для мапа карточек и передать в лист пропсами
    return (
        <>
            {/* <!-- ======= Features Section ======= --> */}
                <section id="features" className="features">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>{header}</h2>
                            <p>
                                {descriptions}
                            </p>
                        </div>

                        <div className="row">
                            {type === 'active' ?
                                <ProfileProductCard />
                                :
                                <h1>Вы не добавляли продуктов</h1>
                            }
                            {type === 'archive' ?
                                // тут мапим из базы карточки
                                <ProfileProductCard />
                                :
                                <h1>Вы не добавляли продуктов</h1>
                            }
                        </div>
                    </div>
                </section>
                {/* <!-- End Features Section --> */}
        </>
    )
}