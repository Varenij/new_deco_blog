import React from 'react';
import SmallArticle from './SmallArticle';


const LikedArticles = (props) => {
    return (
        <div>
            <h1 className='liked-articles'>LIKED ARTICLES</h1>
            {props.articleData.map((
                {id,
                image,
                category,
                title,
                author,
                date,
                smallText,
                likesCount,
                })=>(props.likeArticleState[id] ? 
                        <SmallArticle   key={id}
                                        id={id}
                                        image={image}
                                        category={category}
                                        title={title}
                                        author={author}
                                        date={date}
                                        text={smallText}
                                        likesCount={likesCount}
                                        isLiked={props.likeArticleState[id]}
                                        changeLike={props.changeLike}/>
                : <div  key={id}></div>))}
        </div>
    )
}

export default LikedArticles