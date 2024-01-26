import React from 'react';
import styles from './Tipoke.module.css';

const Subtitle = ({ text }) => {
  return (
    <h2 className={styles.subtitle}>{text}</h2>
  );
};

export default Subtitle;