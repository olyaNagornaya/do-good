import React, {useEffect, useState} from 'react';
import Item from "../Item/Item";


function ItemList() {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/items').then(response => response.json()).then(data => setItems(data))
    }, [])
    return (
        <>
        <main id="main">

            {/*// <!-- ======= Breadcrumbs ======= -->*/}
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="breadcrumb-hero">
                    <div className="container">
                        <div className="breadcrumb-hero">
                            <h2>Дари Добро</h2>
                            <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique
                                quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo
                                harum praesentium. </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <ol>
                        <li><a href="/">Главная</a></li>
                        <li>Добро</li>
                    </ol>
                </div>
            </section>
            {/*// <!-- End Breadcrumbs -->*/}

            {/*// <!-- ======= Blog Section ======= -->*/}

            <section id="blog" className="blog">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-8 entries">

                            {items.map(el => ( <Item key={`${el.title}${el.id}`} el={el}/>))}


                            {/*Пагинация*/}

                            <div className="blog-pagination">
                                <ul className="justify-content-center">
                                    <li><a href="#">1</a></li>
                                    <li className="active"><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                </ul>
                            </div>

                        </div>
                        {/*End blog entries list */}

                        <div className="col-lg-4">

                            <div className="sidebar">

                                <h3 className="sidebar-title">Поиск</h3>
                                <div className="sidebar-item search-form">
                                    <form action="">
                                        <input type="text"/>
                                            <button type="submit"><i className="bi bi-search"></i></button>
                                    </form>
                                </div>
                                 {/*End sidebar search form*/}

                                <h3 className="sidebar-title">Категории</h3>
                                <div className="sidebar-item categories">
                                    <ul>
                                        <li><a href="#">Все <span>(25)</span></a></li>
                                        <li><a href="#">Одежда <span>(10)</span></a></li>
                                        <li><a href="#">Еда <span>(5)</span></a></li>
                                        <li><a href="#">Мебель <span>(10)</span></a></li>
                                    </ul>
                                </div>
                                {/*End sidebar categories*/}


                                <h3 className="sidebar-title">Теги</h3>
                                <div className="sidebar-item tags">
                                    <ul>
                                        <li><a href="#">Все</a></li>
                                        <li><a href="#">Одежда</a></li>
                                        <li><a href="#">Мебель</a></li>
                                        <li><a href="#">Еда</a></li>
                                        <li><a href="#">Добро</a></li>
                                        <li><a href="#">Помощь</a></li>

                                    </ul>
                                </div>
                                 {/*End sidebar tags*/}


                            </div>
                             {/*End sidebar */}

                        </div>
                        {/*End blog sidebar */}

                    </div>

                </div>
            </section>
            {/*End Blog Section */}

        </main>
             {/*End #main */}
        </>
    )
    }
export default ItemList
