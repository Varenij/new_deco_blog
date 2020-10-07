import React from 'react';

const Slider = (props) => {
    return (
        <div className="sliderContainer">
            <div className="slide">
                <img src={props.image} alt=""/>
                <h2>Latest News</h2>
                <h1>{props.title}</h1>
            </div>
        </div> 
    )
}

export default Slider