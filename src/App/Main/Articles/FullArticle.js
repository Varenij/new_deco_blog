import React from 'react';
import SocialNetPage from '../SocialNetPage';
import AveragePage from './AveragePage';
import { Link } from 'react-router-dom';

const FullArticle = ({
    id,
    image,
    category,
    title,
    author,
    date,
    tags,
    photo,
    fullText,
    likesCount,
}) => {
    return (
        <div className="fullArticle">
            <div className="picture">
                <img src={image} alt=""/>
            </div>
            <div className="picture-icon">
                <a href="https://funik.ru/krasivye-kartinki/samye-krasivye-foto-51-foto"><i className="far fa-image"></i></a>
            </div>
            <div className="category">
                <h2>{category}</h2>
            </div>
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="author-date">
                <h2><i className="fas fa-user-alt"></i> {author}</h2>
                <h2><i className="fas fa-calendar-alt"></i> {date}</h2>
            </div>
            <div    className="fullArticle-text"
                    dangerouslySetInnerHTML={{
                        __html:fullText,
                    }}>
            </div>
            <div className='tags'>
                <h2><i className="fas fa-tags"></i>{tags}</h2>
            </div>
            <div className='line'></div>
            <div className="comment-like-social">
                <div className="comment-like">
                    <h2><i className="far fa-comments"></i> COMMENT</h2>
                    <h2><i className="far fa-heart"></i> LIKE {likesCount}</h2>       
                </div>  
                <AveragePage/>
                <SocialNetPage/>
            </div>
            <div className='prev-next-post'>
                <Link to={`/${id === 1 ? id : id-1}`}> 
                    <div className='prev-post'>
                        <i className="fas fa-long-arrow-alt-left"></i>PREVIOUS POST
                    </div>
                </Link>
                <Link to={`/${id === 6 ? id : id+1}`}>
                    <div className='next-post'>
                        NEXT POST<i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                </Link>    
            </div>
            <div className='feedback'>
                <div className="photo">
                    <img src={photo} alt=""/>
                </div>
                <div className="feedback-content">
                    <h3>{author}</h3>
                    <div className="line"></div>
                    <p>Patricia gives you the ability to let people actually read have your content, instead of focusing on all the other stuff that’s going on their screen.</p>
                </div>
            </div>
            <div className="socialNet-3">
                <div className="socialNet-item">
                    <div className="socialNet-item-icon">
                        <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className="number-of-comments">
                        <p>FACEBOOK 28</p>
                    </div>
                </div>
                <div className="socialNet-item">
                    <div className="socialNet-item-icon">
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className="number-of-comments">
                        <p>TWITTER 40</p>
                    </div>
                </div>
                <div className="socialNet-item">
                    <div className="socialNet-item-icon">
                        <i className="fab fa-tumblr"></i>
                    </div>
                    <div className="number-of-comments">
                        <p>TUMBLER 11</p>
                    </div>
                </div>
                <div className="socialNet-item">
                    <div className="socialNet-item-icon">
                        <i className="fab fa-pinterest-p"></i>
                    </div>
                    <div className="number-of-comments">
                        <p>PINTEREST 83</p>
                    </div>
                </div>
            </div>
            <Link to='/'><button className='home-button'>BACK TO HOME PAGE</button></Link>
        </div>
    )
}

export default FullArticle