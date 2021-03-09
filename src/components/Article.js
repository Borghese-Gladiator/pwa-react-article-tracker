import { AiFillCloseCircle } from 'react-icons/ai';

export default function Article({ articleObj }) {
  const { title, link, completed } = articleObj;
  return (
    <div className="m-1 d-flex align-items-center">
      <span className="mr-1">{title}</span>
      <AiFillCloseCircle />
    </div>
  )
}