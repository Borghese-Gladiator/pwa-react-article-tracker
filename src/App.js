import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Article from './components/Article';


import PlaceholderImg from './images/bigstock-Little-Striped-Cute-Kitten-Sit.jpg';

function App() {
  const [articleList, setArticleList] = useState(new Array(10).fill({
    title: 'This is a really really really really cool article link',
    link: '',
    imgLink: PlaceholderImg,
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
      imgLink: PlaceholderImg,
      completed: false
    }
    // push new value to end of displayed articleList
    setArticleList(oldArray => [...oldArray, newElement]);
    // reset input box
    setInputValue('');
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className="card-body">
        <form className="add-items d-flex" onSubmit={onFormSubmit}>
          <input value={inputValue} onChange={handleInputChange} type="text" className="form-control todo-list-input" />
          <button type="submit" className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button>
        </form>
        <div className="d-flex flex-row flex-wrap">
          {
            articleList.map((val, idx) => {
              // const { id } = articleObj;
              // don't just use idx (React uses keys to optimize & figure out rerenders)
              return (
                <Article key={idx} articleObj={val} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
