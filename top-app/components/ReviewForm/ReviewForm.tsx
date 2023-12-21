import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
  return (
    <>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input placeholder="Name" />
        <Input placeholder="Review title" className={styles.title} />
        <div className={styles.rating}>
          <span>Grade</span>
          <Rating rating={0} />
        </div>
        <Textarea placeholder="Review text" className={styles.description} />
        <div className={styles.submit}>
          <Button appearance="primary">Send</Button>
          <span className={styles.info}>
            *Before publication, the review will be pre-moderated and checked
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Your review has been sent</div>
        <div>Thank you for your feedback. It will appear on the site soon.</div>
        <CloseIcon className={styles.close} />
      </div>
    </>
  );
};
