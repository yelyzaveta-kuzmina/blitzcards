import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const DeleteButton = ({ className, onClick }) => {
  return <FontAwesomeIcon className={className} onClick={onClick} icon={faMinusCircle} />;
};

export default DeleteButton;
