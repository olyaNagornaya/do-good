import React, {useEffect, useState} from 'react';
import Item from "../Item/Item";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {PostsThunk} from "../../redux/thunk/ThunkForm";



function ItemList() {
    //следит за всеми товарами
    const [items, setItems] = useState([]);
    //следит за копией
    const [itemsCopy, setItemsCopy] = useState([]);
    //следит за постами в зависимости от текущей страницы
    const [itemsWithPages, setItemsWithPages] = useState([]);
    // Номер текущей страницы
    const [page, setPage] = useState(1);
    //следит за инпутом
    const [input, setInput] = useState('')
    const dispatch = useDispatch();

    const allPost = useSelector(state => state.post);


    console.log('Render in ItemList');
    console.log('items ---->>>>', items);
    console.log('items ---->>>>', itemsCopy);

    useEffect(()=>{
        // fetch('http://localhost:3001/items').then(response => response.json()).then(data => setItems(data))
        if (allPost.length > 0) {
            setItems(allPost);
        } else {
            (async() => {
              await dispatch(PostsThunk());
            })();
        }
    }, [allPost])

    useEffect(() => {
        items && setItemsCopy(items)
    }, [items]);

    useEffect(() => {
        if (input.length === 0) {
            setItemsCopy(items)
        }
    }, [input]);

    const inputHandler = (e) => {
        setInput(e.target.value)
        setItemsCopy(items.filter((el)=> el.title.toLowerCase().includes(input.toLowerCase())))
    };


    // Счетчики для каждой категории
    const allItemsQnty = items?.length;
    const foodQnty = items.filter(el => el.category_id === 1).length;
    const clothesQnty = items.filter(el => el.category_id === 2).length;
    const furnitureQnty = items.filter(el => el.category_id === 3).length;


    console.log(allItemsQnty);
    console.log(foodQnty);
    console.log(clothesQnty);
    console.log(furnitureQnty);

    // Пагинация
    // Кол-во страниц для выводимой категории
    const pagesQnty = Math.ceil(itemsCopy.length/10)
    console.log(pagesQnty);


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

                            {itemsCopy.map(el => ( <Item key={`${el.title}${el.id}`} el={el}/>))}


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
                                    <form>
                                        <input onChange={inputHandler} value={input} type="text"/>
                                            <button type="submit"><i className="bi bi-search"></i></button>
                                    </form>
                                </div>
                                 {/*End sidebar search form*/}

                                <h3 className="sidebar-title">Категории</h3>
                                <div className="sidebar-item categories">
                                    <ul>
                                        <li><a onClick={()=> setItemsCopy(items)}>Все <span>{`(${allItemsQnty})`}</span></a></li>
                                        <li><a onClick={()=> setItemsCopy(()=> items.filter((e)=> e.category_id === 2))}>Одежда <span>{`(${clothesQnty})`}</span></a></li>
                                        <li><a onClick={()=> setItemsCopy(()=> items.filter((e)=> e.category_id === 1))}>Еда <span>{`(${foodQnty})`}</span></a></li>
                                        <li><a onClick={() => setItemsCopy(() => items.filter((el)=> +el.category_id === 3))}>Мебель <span>{`(${furnitureQnty})`}</span></a></li>
                                    </ul>
                                </div>
                                {/*End sidebar categories*/}


                                <h3 className="sidebar-title">Теги</h3>
                                <div className="sidebar-item tags">
                                    <ul>
                                        <li><a onClick={()=> setItemsCopy(items)}>Все</a></li>
                                        <li><a onClick={()=> setItemsCopy(()=> items.filter((e)=> e.category_id === 2))}>Одежда</a></li>
                                        <li><a onClick={() => setItemsCopy(() => items.filter((el)=> +el.category_id === 3))}>Мебель</a></li>
                                        <li><a onClick={()=> setItemsCopy(()=> items.filter((e)=> e.category_id === 1))}>Еда</a></li>

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


