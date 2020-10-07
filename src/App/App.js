import React from 'react';

import '../common/style/reset.css';
import '../common/style/style.css';

import data from './DecoBlogData.js'
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main   articleData={data.articleData}
              postData={data.postData}
              categoriesData={data.categoriesData}
              sliderData={data.sliderData}/>
      <Footer/>
    </div>
  );
}

export default App;
