import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLeveMenu } from '../../helpers/helpers';
import { motion } from 'framer-motion';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const variants = {
    visible: {
      transition: {
        marginBottom: 20,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: { marginBottom: 0 },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29,
    },
    hidden: { opacity: 0, height: 0 },
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        }),
      );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLeveMenu.map((m) => (
          <div key={m.route}>
            <Link style={{ textDecoration: 'none' }} href={`/${m.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id === firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>

            {m.id === firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((secondMenu) => {
          if (secondMenu.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])) {
            secondMenu.isOpened = true;
          }
          return (
            <div key={secondMenu._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevel(secondMenu._id.secondCategory)}
              >
                {secondMenu._id.secondCategory}
              </div>
              <motion.div
                layout
                variants={variants}
                initial={secondMenu.isOpened ? 'visible' : 'hidden'}
                animate={secondMenu.isOpened ? 'visible' : 'hidden'}
                className={cn(styles.secondLevelBlock)}
              >
                {buildThirdLevel(secondMenu.pages, menuItem.route)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((page) => (
      <motion.div key={page._id} variants={variantsChildren}>
        <Link style={{ textDecoration: 'none' }} href={`/${route}/${page.alias}`}>
          <div
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath,
            })}
          >
            {page.category}
          </div>
        </Link>
      </motion.div>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
