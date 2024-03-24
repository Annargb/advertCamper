import { nanoid } from 'nanoid';
import * as c from './Rewiews.styled';
import { FaStar } from 'react-icons/fa';

export const Rewiews = ({ camper }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={nanoid()} fill="#ffc531" />);
      } else {
        stars.push(<FaStar key={nanoid()} fill="#f2f4f7" />);
      }
    }
    return stars;
  };

  return (
    <div>
      <ul>
        {camper.reviews.map((review) => (
          <c.ReviewItem key={nanoid()}>
            <c.NameWrapper>
              <c.ReviewerNameContainer>
                <c.ReviewerNameLetter>
                  {review.reviewer_name.charAt(0).toUpperCase()}
                </c.ReviewerNameLetter>
              </c.ReviewerNameContainer>
              <div>
                <c.ReviewerName>{review.reviewer_name}</c.ReviewerName>
                <div>{renderStars(review.reviewer_rating)}</div>
              </div>
            </c.NameWrapper>
            <c.TextReviews>{review.comment}</c.TextReviews>
          </c.ReviewItem>
        ))}
      </ul>
    </div>
  );
};
