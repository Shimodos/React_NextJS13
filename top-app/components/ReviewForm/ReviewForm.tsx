import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register('name', { required: { value: true, message: 'Enter your name' } })}
          placeholder="Name"
          error={errors.name}
        />
        <Input
          {...register('title', { required: { value: true, message: 'Enter title' } })}
          placeholder="Review title"
          className={styles.title}
          error={errors.title}
        />
        <div className={styles.rating}>
          <span>Grade</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: 'Rating is required' } }}
            render={({ field }) => (
              <Rating rating={field.value} ref={field.ref} isEditable setRating={field.onChange} />
            )}
          />
          {/*<Rating rating={0} />*/}
        </div>
        <Textarea
          {...register('description', { required: { value: true, message: 'Enter text' } })}
          placeholder="Review text"
          className={styles.description}
          error={errors.description}
        />
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
    </form>
  );
};
