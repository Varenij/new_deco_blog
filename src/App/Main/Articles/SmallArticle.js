import React from 'react';
import SocialNetPage from '../SocialNetPage';
import { Link } from 'react-router-dom';

const SmallArticle = (props) => {

    return (
        <div className="smallArticle">
            <div className="picture">
                <img src={props.image} alt=""/>
            </div>
            <div className="picture-icon">
                <a href="https://funik.ru/krasivye-kartinki/samye-krasivye-foto-51-foto"><i className="far fa-image"></i></a>
            </div>
            <div className="category">
                <h2>{props.category}</h2>
            </div>
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            <div className="author-date">
                <h2><i className="fas fa-user-alt"></i> {props.author}</h2>
                <h2><i className="fas fa-calendar-alt"></i> {props.date}</h2>
            </div>
            <div className="smallArticle-text">
                <p>{props.text}</p>
            </div>
            <Link to={`/${props.id}`}>
                <div className="read-more-button">
                    READ MORE
                </div>
            </Link>
            <div className="line">
            </div>
            <div className="comment-like-social">
                <div className="comment-like">
                    <h2><i className="far fa-comments"></i> COMMENT</h2>
                    <button onClick={() => props.changeLike(props.id)}>
                        {props.isLiked ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>} <span>LIKE {props.isLiked ? props.likesCount + 1 : props.likesCount}</span>
                    </button>       
                </div>
                <SocialNetPage/>
            </div>
        </div>
    )
}

export default SmallArticle