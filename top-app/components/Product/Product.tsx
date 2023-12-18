import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { PropductModel } from '@/interfaces/product.interface';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { priceUa } from '@/helpers/helpers';
import { Divider } from '../Divider/Divider';

export const Product = ({ product, className, ...props }: PropductModel): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>
        {priceUa(product.price)}
        {product.oldPrice && (
          <Tag className={styles.oldPrice} color="green">
            {priceUa(product.price - product.oldPrice)}
          </Tag>
        )}
      </div>
      <div className={styles.credit}>
        {priceUa(product.credit)}/<span className={styles.month}>mon</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map((c) => (
          <Tag key={c} className={styles.category} color="ghost">
            {c}
          </Tag>
        ))}
      </div>
      <div className={styles.priceTitle}>Price</div>
      <div className={styles.creditTitle}>Credit</div>
      <div className={styles.ratingTitle}>{product.reviewCount} Reviews</div>
      {/* <div className={styles.hr}>
        <hr />
      </div> */}
      <Divider className={styles.hr} />
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>Feature</div>
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
        <Button appearance="ghost" className={styles.reviewButton} arrow={'right'}>
          Review
        </Button>
      </div>
    </Card>
  );
};