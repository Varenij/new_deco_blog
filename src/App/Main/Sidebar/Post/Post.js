import React from 'react';

const Post = (props) => {
    return (
    <div className="post">
        <div>
            <img src={props.image} alt=""/>
        </div>
        <div>
            <h2>{props.title}</h2>
            <span>{props.date}</span>
            <br/>
            <span>LIKE {props.like}</span>
        </div>
    </div>
    )
}

export default Post