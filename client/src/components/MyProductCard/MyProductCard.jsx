import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";



function MyProductCard({ item }) {

    return (
        <>

                <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to={`/good/${item._id}`}>{item.name}</Link>
                                {/*<Link to={`/food`}>{item.name}</Link>*/}
                            </h5>
                            <p className="card-text">{item.description}</p>
                            <div className="read-more">
                                <Link to="#" >
                                    <i className="bi bi-arrow-right"></i>Снять с публикации
                                </Link>
                            </div>
                            <div className="read-more">
                                <Link to="#" >
                                    <i className="bi bi-arrow-right"></i>Изменить
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


            {/*{isOpen ? (*/}
            {/*    <div style={BUTTON_WRAPPER_STYLES}>*/}
                    {/*<EditUserFormModal*/}
                    {/*    open={isOpen}*/}
                    {/*    onClose={() => setIsOpen(false)}*/}
                    {/*    food={item}*/}
                    {/*    setProfile={setProfile}*/}
                    {/*/>*/}
            {/*    </div>*/}
            {/*) : null}*/}
        </>
    );
}

export default MyProductCard;
