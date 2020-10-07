import React from 'react';

const CategoryPage = (props) => {
    return (
        <div className="category-item">
            <span>{props.title}</span>
            <span>{props.number}</span>
        </div>
    )
}

export default CategoryPage