import { Container } from '../../styles/container';
import * as c from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <c.HomeWrapper>
        <c.HomeBgImg />
        <div>
          <c.HomeSlogan>Your adventures start here!</c.HomeSlogan>
          <c.HomeText to="/catalog">Book your campervan now</c.HomeText>
        </div>
      </c.HomeWrapper>
    </Container>
  );
};

export default HomePage;
