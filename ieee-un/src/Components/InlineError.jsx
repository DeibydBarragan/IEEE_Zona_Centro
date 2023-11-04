import React from 'react';

import styles from '../Styles/Sign.module.sass';

function InlineError({ error }) {
  return (
    <span className={styles.errorText}>{error}</span>
  );
}

export default InlineError;