import { nanoid } from 'nanoid';
import * as c from './Rewiews.styled';

export const Rewiews = ({ camper }) => {
  return (
    <div>
      <ul>
        {camper.reviews.map((review) => (
          <li key={nanoid()}>
            <c.NameWrapper>
              <c.ReviewerNameContainer>
                <c.ReviewerNameLetter>
                  {review.reviewer_name.charAt(0).toUpperCase()}
                </c.ReviewerNameLetter>
              </c.ReviewerNameContainer>
              <c.ReviewerName>{review.reviewer_name}</c.ReviewerName>
            </c.NameWrapper>
            <c.TextReviews>{review.comment}</c.TextReviews>
          </li>
        ))}
      </ul>
    </div>
  );
};
