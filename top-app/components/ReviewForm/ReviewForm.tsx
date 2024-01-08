import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import { API } from '@/helpers/api';
import axios from 'axios';
import { useState } from 'react';

export const ReviewForm = ({
  productId,
  isOpened,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setIsError] = useState<string>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, {
        ...formData,
        productId,
      });
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setIsError('Something went wrong');
      }
    } catch (e) {
      setIsError(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register('name', { required: { value: true, message: 'Enter your name' } })}
          placeholder="Name"
          error={errors.name}
          tabIndex={isOpened ? 0 : -1}
        />
        <Input
          {...register('title', { required: { value: true, message: 'Enter title' } })}
          placeholder="Review title"
          className={styles.title}
          error={errors.title}
          tabIndex={isOpened ? 0 : -1}
        />
        <div className={styles.rating}>
          <span>Grade</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: 'Rating is required' } }}
            render={({ field }) => (
              <Rating
                rating={field.value}
                ref={field.ref}
                isEditable
                setRating={field.onChange}
                error={errors.rating}
              />
            )}
          />
          {/*<Rating rating={0} />*/}
        </div>
        <Textarea
          {...register('description', { required: { value: true, message: 'Enter text' } })}
          placeholder="Review text"
          className={styles.description}
          error={errors.description}
          tabIndex={isOpened ? 0 : -1}
        />
        <div className={styles.submit}>
          <Button appearance="primary" tabIndex={isOpened ? 0 : -1}>
            Send
          </Button>
          <span className={styles.info}>
            *Before publication, the review will be pre-moderated and checked
          </span>
        </div>
      </div>
      {isSuccess && (
        <div className={cn(styles.success, styles.panel)} role="alert">
          <div className={styles.successTitle}>Your review has been sent</div>
          <div>Thank you for your feedback. It will appear on the site soon.</div>
          <button
            onClick={() => setIsSuccess(false)}
            className={styles.close}
            aria-label="Close notification"
          >
            <CloseIcon />
          </button>
        </div>
      )}
      {error && (
        <div className={cn(styles.error, styles.panel)} role="alert">
          <div className={styles.errorTitle}>Error sending review, reload page</div>
          <button
            onClick={() => setIsError(undefined)}
            className={styles.close}
            aria-label="Close notification"
          >
            <CloseIcon />
          </button>
        </div>
      )}
    </form>
  );
};
