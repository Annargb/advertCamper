import * as c from './NotFound.styled';
import van from '../../images/van1.webp';

export const NotFound = ({ text, styles }) => {
  return (
    <c.NotFoundWrapper style={styles}>
      <c.NotFoundText>{text}</c.NotFoundText>
      <c.NotfoundImg src={van} alt="van" />
    </c.NotFoundWrapper>
  );
};
