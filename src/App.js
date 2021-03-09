import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import ArticleList from './components/ArticleList';

function App() {
  const [articleList, setArticleList] = useState(new Array(10).fill({}));

  return (
    <div class="d-flex justify-content-center">
      <div className="row container d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card px-3">
            <div className="card-body">
              <h4 className="card-title">Awesome Todo list</h4>
              <div className="add-items d-flex"> <input type="text" className="form-control todo-list-input" placeholder="What do you need to do today?" /> <button className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button> </div>
              <div className="list-wrapper">
                <ArticleList articleList={articleList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
