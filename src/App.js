import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import ArticleList from './components/ArticleList';

function App() {
  const [articleList, setArticleList] = useState(new Array(10).fill({
    title: 'blah',
    link: '',
    completed: false,
  }));
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    e.preventDefault();
    console.log(e);
    setInputValue(e.target.value);
  }
  const onFormSubmit = e => {
    e.preventDefault();
    const newElement = {
      title: inputValue,
      link: '',
      completed: false
    }
    // push new value to end of displayed articleList
    setArticleList(oldArray => [...oldArray, newElement]);
    // reset input box
    setInputValue('');
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className="col-md-12">
        <div className="card px-3">
          <div className="card-body">
            <form className="add-items d-flex" onSubmit={onFormSubmit}>
              <input value={inputValue} onChange={handleInputChange} type="text" className="form-control todo-list-input" />
              <button type="submit" className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button>
            </form>
            <div className="list-wrapper">
              <ArticleList articleList={articleList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
