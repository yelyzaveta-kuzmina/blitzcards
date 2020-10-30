import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import classname from 'classnames';
import styles from './styles.module.scss';

const SettingsButton = ({ to, activeClassName }) => {
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push(to);
  }, [to, history]);

  return (
    <div className={styles.iconWrapper}>
      <FontAwesomeIcon
        className={classname(activeClassName, styles.settingsIcon)}
        onClick={onClick}
        icon={faCog}
      />
    </div>
  );
};

export default SettingsButton;
