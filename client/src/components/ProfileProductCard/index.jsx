export default function ProfileProductCard() {

    // тут из пропсов закинуть данные в поля карты
    const testImage = {
        backgroundImage: 'url(https://i.pinimg.com/originals/68/8e/32/688e32cd90dbb711edc5812f7d05975d.jpg)',
    }; //временный хардкод, потом удалим, когда из базы фотос прилетит
    return (
        <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up">
            <div className="card" style={testImage}>
                <div className="card-body">
                    <h5 className="card-title">
                        {/*<Link to={`/food/${item._id}`}>{item.name}</Link>*/}
                        Тут название
                    </h5>
                    <p className="card-text">
                        {/*{item.description}*/}
                        тут описание
                    </p>
                    <div className="read-more card-text">
                        {/*<Link to="#" onClick={handlerChangeStatus}>*/}
                            <i className="bi bi-arrow-right"/> Снять с публикации
                        {/*</Link>*/}
                    </div>
                    <div className="read-more card-text">
                        {/*<Link to="#" onClick={clickHandler}>*/}
                            <i className="bi bi-arrow-right"/> Изменить
                        {/*</Link>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}