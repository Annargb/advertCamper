import styled from 'styled-components';
import van from '../../images/van1.webp';
import { Link } from 'react-router-dom';

export const HomeBgImg = styled.div`
  flex-shrink: 0;
  width: 630px;
  height: 630px;
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  background-image: url(${van});
`;

export const HomeWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
`;

export const HomeSlogan = styled.h1`
  font-weight: 600;
  font-size: 84px;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 44px;
  color: ${(p) => p.theme.colors.textTitleColor};
`;

export const HomeText = styled(Link)`
  display: block;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  color: ${(p) => p.theme.colors.textColor};

  transition: color 250ms ${(p) => p.theme.transition};

  &:hover {
    color: ${(p) => p.theme.colors.hoverButtonColor};
  }
`;
