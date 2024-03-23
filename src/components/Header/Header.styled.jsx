import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 28px 0;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 64px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.textTitleColor};
  transition: color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.hoverButtonColor};
  }

  &.active {
    color: ${(p) => p.theme.colors.hoverButtonColor};
  }
`;
