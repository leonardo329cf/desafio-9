import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { requestBackend } from '../../util/requests';
import ReviewEntry from './ReviewEntry';
import { Review } from '../../types/review';

type Props = {
  movieId: string;
  refresh?: number;
};

const Reviews = ({ movieId, refresh }: Props) => {

  const [reviews, setReviews] = useState<Review[]>();

  const [isLoading, setIsLoading] = useState(false);

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    setIsLoading(true);
    requestBackend(params)
      .then((response) => {
        setHasError(false);
        setReviews(response.data);
      })
      .catch((error) => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId, refresh]);

  return (
    <div className="reviews-container">
      {!isLoading &&
        !hasError &&
        reviews?.map((review) => (
          <div className="review-entry" key={review.id}>
            <ReviewEntry review={review} />
          </div>
        ))}
    </div>
  );
};

export default Reviews;
