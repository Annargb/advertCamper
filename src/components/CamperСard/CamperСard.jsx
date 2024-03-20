import * as c from './CamperСard.styled';

export const CamperCard = ({
  camper: { name, price, location, gallery, rating, reviews, description },
}) => {
  let photo = gallery[0];
  console.log(photo);
  return (
    <c.CardWrapper>
      <img src={gallery} alt={name} />
      <div>
        <div>
          <c.CamperName>{name}</c.CamperName>
          <p>{`₴${price}`}</p>
        </div>
        <div>
          <p>{`${rating}(${reviews.length} Reviews)`}</p>
          <p>{location}</p>
        </div>
        <p>{description}</p>
        <p></p>
        <button type="button">Show more</button>
      </div>
    </c.CardWrapper>
  );
};
