import Article from './Article';

export default function ArticleList({ articleList }) {
  return (
    <ul className="d-flex flex-column-reverse todo-list">
      {
        articleList.map((val, idx) => {
          // const { id } = articleObj;
          // don't just use idx (React uses keys to optimize & figure out rerenders)
          return (
            <Article key={idx} articleObj={val} />
          )
        })
      }
    </ul>
  )
}