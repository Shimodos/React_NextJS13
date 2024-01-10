import { motion, useAnimation } from 'framer-motion';
import { useScrollY } from '../hooks/useScrollY';
import styles from './Up.module.css';
import { useEffect } from 'react';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

export const Up = (): JSX.Element => {
  const control = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    control.start({ opacity: y / document.body.scrollHeight });
  }, [y, control]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <motion.div className={styles.up} animate={control} initial={{ opacity: 0 }}>
      <ButtonIcon appearance="primary" icon="up" aria-label="Up" onClick={scrollUp} />
    </motion.div>
  );
};
