import StarIcon from '../../../assets/images/starIcon.png';
import { Review } from '../../../types/review';

type Props = {
  review: Review;
}

const ReviewEntry = ( { review } : Props ) => (
  <div className="review-entry-container">
    <div className="name-container">
        <img src={StarIcon} alt="Star Icon"/>
        <h4>{review.user.name}</h4>
    </div>
    <div className="text-container">
        <p>{review.text}</p>
    </div>
  </div>
);

export default ReviewEntry;
