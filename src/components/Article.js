import { CgEnter } from 'react-icons/cg';

export default function Article({ articleObj }) {
  const { title, link, imgLink } = articleObj;
  return (
    <div className="col-6 col-md-4">
      <div className="card m-2">
        <div className="d-flex align-items-center justify-content-between card-body">
          <span>{title}{' '}<a href={link} target="_blank" rel="noopener noreferrer"><CgEnter /></a></span>
        </div>
        <img className="card-img-top" src={imgLink} alt="card graphic" />
      </div>
    </div>
  )
}