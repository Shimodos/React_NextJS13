import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { PropductModel } from '@/interfaces/product.interface';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { declOfNum, priceUa } from '@/helpers/helpers';
import { Divider } from '../Divider/Divider';
import Image from 'next/image';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { motion } from 'framer-motion';

export const Product = motion(
  forwardRef(
    (
      { product, className, ...props }: PropductModel,
      ref: ForwardedRef<HTMLDivElement>,
    ): JSX.Element => {
      const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
      const reviewRef = useRef<HTMLDivElement>(null);

      const variants = {
        visible: {
          opacity: 1,
          height: 'auto',
        },
        hidden: { opacity: 0, height: 0 },
      };

      const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        reviewRef.current?.focus();
      };

      return (
        <div className={className} {...props} ref={ref}>
          <Card className={styles.product}>
            <div className={styles.logo}>
              <Image
                src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                alt={product.title}
                width={70}
                height={70}
              />
              {/* <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} /> */}
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
              <span className="visuallyHidden">Price</span>
              {priceUa(product.price)}
              {product.oldPrice && (
                <Tag className={styles.oldPrice} color="green">
                  <span className="visuallyHidden">Old price</span>
                  {priceUa(product.price - product.oldPrice)}
                </Tag>
              )}
            </div>
            <div className={styles.credit}>
              <span className="visuallyHidden">Credit</span>
              {priceUa(product.credit)}/<span className={styles.month}>mon</span>
            </div>
            <div className={styles.rating}>
              <span className="visuallyHidden">
                {'Rating' + (product.reviewAvg ?? product.initialRating)}
              </span>
              <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
              {product.categories.map((c) => (
                <Tag key={c} className={styles.category} color="ghost">
                  {c}
                </Tag>
              ))}
            </div>
            <div className={styles.priceTitle} aria-hidden={true}>
              Price
            </div>
            <div className={styles.creditTitle} aria-hidden={true}>
              Credit
            </div>
            <div className={styles.ratingTitle}>
              <a href="#ref" onClick={scrollToReview}>
                {product.reviewCount}{' '}
                {declOfNum(product.reviewCount, ['review', 'reviews', 'reviews'])}
              </a>
            </div>
            <Divider className={styles.hr} />
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>
              {product.characteristics.map((c) => (
                <div className={styles.characteristics} key={c.name}>
                  <span className={styles.characteristicsName}>{c.name}</span>
                  <span className={styles.characteristicsDots}></span>
                  <span className={styles.characteristicsValue}>{c.value}</span>
                </div>
              ))}
            </div>
            <div className={styles.advBlock}>
              {product.advantages && (
                <div className={styles.advantage}>
                  <div className={styles.advTitle}>Advantage</div>
                  <div>{product.advantages}</div>
                </div>
              )}
              {product.disadvantages && (
                <div className={styles.disadvantages}>
                  <div className={styles.advTitle}>Disadvantages</div>
                  <div>{product.disadvantages}</div>
                </div>
              )}
            </div>
            <Divider className={cn(styles.hr, styles.hr2)} />
            <div className={styles.action}>
              <Button appearance="primary">More details</Button>
              <Button
                appearance="ghost"
                className={styles.reviewButton}
                arrow={isReviewOpened ? 'down' : 'right'}
                onClick={() => setIsReviewOpened(!isReviewOpened)}
              >
                Review
              </Button>
            </div>
          </Card>
          <motion.div
            className={styles.reviewsCard}
            animate={isReviewOpened ? 'visible' : 'hidden'}
            variants={variants}
            initial={'hidden'}
          >
            <Card
              color="blue"
              className={styles.reviews}
              ref={reviewRef}
              tabIndex={isReviewOpened ? 0 : -1}
            >
              {product.reviews.map((r) => (
                <div key={r._id}>
                  <Review review={r} />
                  <Divider />
                </div>
              ))}
              <ReviewForm productId={product._id} isOpened={isReviewOpened} />
            </Card>
          </motion.div>
        </div>
      );
    },
  ),
);
