import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 28px;
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

  &.active {
    color: ${(p) => p.theme.colors.hoverButtonColor};
  }
`;
