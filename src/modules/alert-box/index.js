import React from 'react';
import styles from './styles.module.scss';

const AlertBox = ({ itemName, itemType }) => {
  return (
    <div className={styles.alertBoxWrapper}>
      {`Are you sure you want to permanently remove ${itemName} ${itemType} from your learning list?`}
    </div>
  );
};

export default AlertBox;
