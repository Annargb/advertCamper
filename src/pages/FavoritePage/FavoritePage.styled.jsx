import styled from 'styled-components';

export const FavoritePageContainer = styled.div`
  padding-bottom: 100px;
`;

export const CommonList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FavoriteTitle = styled.h1`
  margin-top: 28px;
  margin-bottom: 44px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.textTitleColor};
`;
