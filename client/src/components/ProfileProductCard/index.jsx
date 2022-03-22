import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import { changeStatus} from "../../redux/actions/formActions";

export default function ProfileProductCard({type, card}) {

    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const posts = useSelector(state => state.posts)
    const clickHandler = (id) => {
        setIsOpen(true);
    };
    // const handlerChangeStatus = () => {
    //     dispatch(changeStatus(card.id, posts))
    // }

    const handlerChangeStatus = async () => {
        console.log('START')
        const resp = await fetch(`http://localhost:3001/items/${card.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({id: card.id}),
        });
        console.log(resp)
        const answer = await resp.json()
        if(resp.ok){
            console.log("мы в ифе", posts)
            dispatch(changeStatus(card.id, posts))
            // const allPosts = posts.map(el => el.id === card.id ? {...el, available: false} : el)

        }

      }



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
                    </p>
                    {type === 'active' &&
                        <>
                        <div className="read-more card-text">
                            <Link to="#" onClick={handlerChangeStatus} >
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