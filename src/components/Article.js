import { CgEnter } from 'react-icons/cg';

export default function Article({ articleObj }) {
  const { title, link, imgLink } = articleObj;
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card m-2">
        <div className="d-flex align-items-center justify-content-between card-body">
          <a href={link} target="_blank" rel="noopener noreferrer">{title}<CgEnter /></a>
        </div>
        <img className="card-img-top" src={imgLink} alt="card graphic" />
      </div>
    </div>
  )
}