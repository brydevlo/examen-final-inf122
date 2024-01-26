import React from 'react';
import styles from './ImgNum.module.css';

const ImgNum = ({ imageUrl, number }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imageUrl}/>
      <div className={styles.number}>{number}</div>
    </div>
  );
};

export default ImgNum;