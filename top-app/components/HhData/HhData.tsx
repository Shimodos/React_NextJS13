import styles from './HhData.module.css';
import { HhDataProps } from './HhData.props';
import { Card } from '../Card/Card';
import RateIcon from './rate.svg';
import { priceUa } from '../../helpers/helpers';
import React from 'react';

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: HhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Active Vacancy</div>
        <div className={styles.countValue}>{count}</div>
      </Card>

      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Junior</div>
          <div className={styles.salaryValue}>{priceUa(juniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={styles.title}>Middle</div>
          <div className={styles.salaryValue}>{priceUa(middleSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={styles.title}>Senior</div>
          <div className={styles.salaryValue}>{priceUa(seniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};
