import styles from './Advantages.module.css';
// import cn from 'classnames';
import { AdvantagesProps } from './Advantages.props';
import CheckIcon from './check.svg';
import React from 'react';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div className={styles.description}>{a.description}</div>
        </div>
      ))}
    </>
  );
};
