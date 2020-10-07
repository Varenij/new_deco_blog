import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

import "./Main.css";
import { Link, Route } from 'react-router-dom';
import SmallArticle from './Articles/SmallArticle';
import Sidebar from './Sidebar/Sidebar';
import Slider from './Slider/Slider';
import SingUp from './SingUp/SingUn';
import FullArticle from './Articles/FullArticle';
import LikedArticles from './Articles/LikedArticles';

class Main extends Component {

    state = {
        likeArticleState: {
           1: false,
           2: false,
           3: false,
        },
        totalLikesArr: 0
    }

    changeLike = (articleId) => {
        if (this.state.likeArticleState[articleId]) {
            this.setState((prevState) => ({
                likeArticleState: {
                    ...prevState.likeArticleState,
                    [articleId]:false
                }
            }));
            this.setState((prevState) => ({
                totalLikesArr: prevState.totalLikesArr - 1
            }))
        } else {
            this.setState((prevState) => ({
                likeArticleState: {
                    ...prevState.likeArticleState,
                    [articleId]:true
                }
            }))
            this.setState((prevState) => ({
                totalLikesArr: prevState.totalLikesArr + 1
            }))
        }
    }

    render () {
        return (
            <div className='main'>
                <div className="container relative">
                    <Carousel   verticalMode
                                enableAutoPlay
                                autoPlaySpeed={6000}
                                enableMouseSwipe
                                enableTilt>
                        {this.props.sliderData.map((
                            {id,
                            image,
                            title,
                            }) => (<Slider      key={id}
                                                image={image}
                                                title={title}/>
                            )
                        )}
                    </Carousel>
                </div>
                <div className="container">
                    <SingUp/>
                    <div className="total-liked">
                        <Link to={'/likedArticles'}>
                            TOTAL LIKED ARTICLES: {this.state.totalLikesArr}
                        </Link>
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <div className="articles">
                            {this.props.articleData.map((
                                {id,
                                image,
                                category,
                                title,
                                author,
                                date,
                                smallText,
                                likesCount,
                                })=>(<Route path='/' key={id} exact render={() => (
                                        <SmallArticle   key={id}
                                                        id={id}
                                                        image={image}
                                                        category={category}
                                                        title={title}
                                                        author={author}
                                                        date={date}
                                                        text={smallText}
                                                        likesCount={likesCount}
                                                        isLiked={this.state.likeArticleState[id]}
                                                        changeLike={this.changeLike}/>
                                )}/>)                         
                            )}

                            <Route path='/likedArticles' render={() => (
                                <LikedArticles  articleData={this.props.articleData}
                                                likeArticleState={this.state.likeArticleState}
                                                changeLike={this.changeLike}/>
                            )}/>
                                                

                            {this.props.articleData.map((
                                {id,
                                image,
                                category,
                                title,
                                author,
                                date,
                                tags,
                                photo,
                                smallText,
                                fullText,
                                likesCount,
                                })=>(<Route path={`/${id}`} key={id} render={() => (
                                    <FullArticle
                                        key={id}
                                        id={id}
                                        image={image}
                                        category={category}
                                        title={title}
                                        author={author}
                                        date={date}
                                        tags={tags}
                                        photo={photo}
                                        smallText={smallText}
                                        fullText={fullText}
                                        likesCount={likesCount}
                                        isLiked={this.state.likeArticleState[id]}
                                        changeLike={this.changeLike}/>
                                )}/>)                         
                            )}
                        </div>
                        <Sidebar    postData={this.props.postData}
                                    categoriesData={this.props.categoriesData}
                                    changeLike={this.changeLike}
                                    isLiked={this.state.likeArticleState}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main

