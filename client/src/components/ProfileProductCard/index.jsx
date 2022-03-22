import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";

export default function ProfileProductCard({type, card}) {

    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = (id) => {
        setIsOpen(true);
    };


    // тут из пропсов закинуть данные в поля карты
    // const testImage = {
        // backgroundImage: 'url(https://i.pinimg.com/originals/68/8e/32/688e32cd90dbb711edc5812f7d05975d.jpg)',
    // }; //временный хардкод, потом удалим, когда из базы фотос прилетит

    const backgroundImage = {
    backgroundImage: `url(${card.img})`,
    };
    console.log('card=======>>>>', card)
    return (
        <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up">
            <div className="card" style={backgroundImage}>
                <div className="card-body">
                    <h5 className="card-title">
                        {/*<Link to={`/good/${id}`}>{card.title}</Link>*/}
                        {card.title}
                    </h5>
                    <p className="card-text">
                        {card.description}
                        тут описание
                    </p>
                    {type === 'active' &&
                        <>
                        <div className="read-more card-text">
                            <Link to="#" >
                                <i className="bi bi-arrow-right"/> Снять с публикации
                            </Link>
                        </div>
                        <div className="read-more card-text">
                            <Link to="#" onClick={clickHandler}>
                                <i className="bi bi-arrow-right"/> Изменить
                            </Link>
                        </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}