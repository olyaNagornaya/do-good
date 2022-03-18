import React from 'react';
import {Link} from "react-router-dom";


function Item({el}) {


    return (
        <>
            <main id="main">


                {/*// <!-- ======= Blog Section ======= -->*/}
                <section id="blog" className="blog">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-8 entries">


                                <article className="entry">
                                    <div className="entry-img">
                                        <img src="assets/img/blog/blog-2.jpg" alt="" className="img-fluid"/>
                                    </div>

                                    <h2 className="entry-title">
                                        <a href="/good/:id">{el.title}</a>
                                    </h2>

                                    <div className="entry-meta">
                                        <ul>
                                            <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a
                                                href="/good/:id">{el.user_id}</a></li>
                                            <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a
                                                href="/good/:id">
                                                <time dateTime="2020-01-01">{el.createdAt.slice(0, 10)}</time>

                                            </a></li>
                                            <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a
                                                href="/good/:id">{el.category_id}</a></li>
                                        </ul>
                                    </div>

                                    <div className="entry-content">
                                        <p>
                                            {el.description}
                                        </p>
                                        <div className="read-more">
                                            <a href={`/good/${el.id}`}>Подробнее</a>
                                        </div>
                                    </div>

                                </article>
                                {/*End blog entry*/}

                                {/*Пагинация*/}

                                {/*<div className="blog-pagination">*/}
                                {/*    <ul className="justify-content-center">*/}
                                {/*        <li><a href="#">1</a></li>*/}
                                {/*        <li className="active"><a href="#">2</a></li>*/}
                                {/*        <li><a href="#">3</a></li>*/}
                                {/*    </ul>*/}
                                {/*</div>*/}

                            </div>
                            {/*End blog entries list */}

                            <div className="col-lg-4">

                                {/*<div className="sidebar">*/}

                                    {/*<h3 className="sidebar-title">Поиск</h3>*/}
                                    {/*<div className="sidebar-item search-form">*/}
                                    {/*    <form action="">*/}
                                    {/*        <input type="text"/>*/}
                                    {/*        <button type="submit"><i className="bi bi-search"></i></button>*/}
                                    {/*    </form>*/}
                                    {/*</div>*/}
                                    {/*End sidebar search form*/}

                                    {/*<h3 className="sidebar-title">Категории</h3>*/}
                                    {/*<div className="sidebar-item categories">*/}
                                    {/*    <ul>*/}
                                    {/*        <li><a href="#">Все <span>(25)</span></a></li>*/}
                                    {/*        <li><a href="#">Одежда <span>(10)</span></a></li>*/}
                                    {/*        <li><a href="#">Еда <span>(5)</span></a></li>*/}
                                    {/*        <li><a href="#">Мебель <span>(10)</span></a></li>*/}
                                    {/*    </ul>*/}
                                    {/*</div>*/}
                                    {/*End sidebar categories*/}



                                {/*</div>*/}
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
export default Item
