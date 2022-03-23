import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {changeStatus, setStatus} from "../../redux/actions/formActions";
import axios from "axios";

export default function ProfileProductCard({type, card}) {

    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const posts = useSelector(state => state.post)
    const clickHandler = (id) => {
        setIsOpen(true);
    };


    console.log('posts-1111->>', posts)
    const handlerChangeStatus = async (cardId) => {

        try {
            const response = await axios.post(`http://localhost:3001/items/${cardId}`, {
                id: cardId
            });
        } catch (e) {
            console.error(e);
        }

        const res = posts.map((el) => {
            if (el.id === cardId) {
                el.available = false;
                return el
            } else {
                return el
            }})
        console.log('res--', res)
        dispatch(setStatus(res))

      }



    const backgroundImage = {
    backgroundImage: `url(${card.img})`,
    };
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
                    </p>
                    {type === 'active' &&
                        <>
                        <div className="read-more card-text">
                            <Link to="#" onClick={() => handlerChangeStatus(card.id)} >
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