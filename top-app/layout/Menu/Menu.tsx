import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext, KeyboardEvent, useState } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLeveMenu } from '../../helpers/helpers';
import { motion, useReducedMotion } from 'framer-motion';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();

  const variants = {
    visible: {
      transition: shouldReduceMotion
        ? {}
        : {
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
    hidden: { opacity: shouldReduceMotion ? 1 : 0, height: 0 },
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            setAnnounce(m.isOpened ? 'closed' : 'opened');
            m.isOpened = !m.isOpened;
          }
          return m;
        }),
      );
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code == 'Space' || key.code == 'Enter') {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const buildFirstLevel = () => {
    return (
      <ul className={styles.firstLevelList}>
        {firstLeveMenu.map((m) => (
          <li key={m.route} aria-expanded={m.id == firstCategory}>
            <Link style={{ textDecoration: 'none' }} href={`/${m.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id == firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>

            {m.id === firstCategory && buildSecondLevel(m)}
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <ul className={styles.secondBlock}>
        {menu.map((secondMenu) => {
          if (secondMenu.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])) {
            secondMenu.isOpened = true;
          }
          return (
            <li key={secondMenu._id.secondCategory}>
              <button
                onKeyDown={(key: KeyboardEvent) =>
                  openSecondLevelKey(key, secondMenu._id.secondCategory)
                }
                className={styles.secondLevel}
                onClick={() => openSecondLevel(secondMenu._id.secondCategory)}
                aria-expanded={secondMenu.isOpened}
              >
                {secondMenu._id.secondCategory}
              </button>
              <motion.ul
                layout
                variants={variants}
                initial={secondMenu.isOpened ? 'visible' : 'hidden'}
                animate={secondMenu.isOpened ? 'visible' : 'hidden'}
                className={styles.secondLevelBlock}
              >
                {buildThirdLevel(secondMenu.pages, menuItem.route, secondMenu.isOpened ?? false)}
              </motion.ul>
            </li>
          );
        })}
      </ul>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return pages.map((page) => (
      <motion.li key={page._id} variants={variantsChildren}>
        <Link
          tabIndex={isOpened ? 0 : -1}
          style={{ textDecoration: 'none' }}
          href={`/${route}/${page.alias}`}
        >
          <div
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${page.alias}` == router.asPath,
            })}
            aria-current={`/${route}/${page.alias}` == router.asPath ? 'page' : false}
          >
            {page.category}
          </div>
        </Link>
      </motion.li>
    ));
  };

  return (
    <nav className={styles.menu} role="navigation">
      {announce && (
        <span className="visuallyHidden" role="log">
          {announce == 'opened' ? 'Opened' : 'Closed'}
        </span>
      )}
      {buildFirstLevel()}
    </nav>
  );
};
