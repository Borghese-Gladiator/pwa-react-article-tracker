import { CgEnter } from 'react-icons/cg';

export default function Article({ articleObj }) {
  const { title, description, link, imgLink } = articleObj;
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card m-1 p-2">
        <div class="card-body">
          <h5 className="card-title"><a href={link} target="_blank" rel="noopener noreferrer">{title}<CgEnter /></a></h5>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </div>
  )
}