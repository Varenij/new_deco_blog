import React from 'react';
import image7 from "../../../common/image/7.png"
import image8 from "../../../common/image/8.png"
import Post from './Post/Post';
import CategoryPage from './Categories/CategoryPage';
import SocialNetPage from '../SocialNetPage';


const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div className="search">
                <input type="search" placeholder="SEARCH"/>
                <div className="search-icon">
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="advertising">
                <img src={image7} alt=""/>
            </div>
            <h1>CATAGORIES</h1>
            <div className="line">
            </div>
            <div className="catagories">
                {props.categoriesData.map((
                            {id,
                            title,
                            number,
                            })=>(<CategoryPage      key={id}
                                                    title={title}
                                                    number={number}/>
                            )
                )}  
            </div>
            <div className="small-advertising">
                <img src={image8} alt=""/>
            </div>
            <h1>LATEST POST</h1>
            <div className="posts">
                {props.postData.map((
                    {id,
                    image,
                    title,
                    date,
                    like,
                    })=>(<Post  key={id}
                                image={image}
                                title={title}
                                date={date}
                                like={like}/>
                    )
                )}
            </div>
            <SocialNetPage/>
        </div>
    )
}

export default Sidebar