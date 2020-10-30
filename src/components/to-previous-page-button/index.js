import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames';
import styles from './styles.module.scss';

const ToPreviousPageButton = ({ to, className }) => {
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push(to);
  }, [to, history]);

  return (
    <div className={classNames(styles.button, className)}>
      <div onClick={onClick}>
        <FontAwesomeIcon onClick={onClick} icon={faArrowAltCircleLeft} />
      </div>
    </div>
  );
};

export default ToPreviousPageButton;
