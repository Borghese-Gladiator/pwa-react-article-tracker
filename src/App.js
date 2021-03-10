import React, { useState, useEffect } from 'react';
import './App.css';

import Article from './components/Article';


import PlaceholderImg from './images/bigstock-Little-Striped-Cute-Kitten-Sit.jpg';

function App() {
  const [articleList, setArticleList] = useState(new Array(3).fill({
    title: 'This is a really really really really cool article link',
    description: '',
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
      description: '',
      link: '',
      imgLink: PlaceholderImg,
      completed: false
    }
    // push new value to end of displayed articleList
    setArticleList(oldArray => [...oldArray, newElement]);
    // reset input box
    setInputValue('');
  }

  useEffect(() => {
    const parsedUrl = new URL(window.location);
    console.log(parsedUrl);
    const title = parsedUrl.searchParams.get('title');
    const description = parsedUrl.searchParams.get('description');
    const url = parsedUrl.searchParams.get('url');

    const newElement = {
      title: title,
      description: description,
      link: url,
      imgLink: PlaceholderImg,
      completed: false
    }

    if (title && description && url) {
      // push new value to end of displayed articleList
      setArticleList(oldArray => [...oldArray, newElement]);
    }
  }, [])
  
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
