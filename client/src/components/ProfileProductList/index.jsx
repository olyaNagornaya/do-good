import ProfileProductCard from "../ProfileProductCard";

export default function ProfileProductList({header, descriptions, type, posts}) {

    console.log('posts-->', posts) // мапим
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
                                <>
                                    {posts && posts.map(el => <ProfileProductCard key={el.id} card={el} type={type}/>
                                )}
                                </>
                                :
                                <h1>Вы не добавляли продуктов</h1>
                            }
                            {type === 'archive' ?
                                // тут мапим из базы карточки posts из пропсов
                                <>
                                    {posts && posts.map(el => <ProfileProductCard key={el.id} card={el} type={type}/>
                                    )}

                                </>
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