import styled from 'styled-components';

export const CatalogPageContainer = styled.div`
  padding-bottom: 100px;
`;

export const CatalogWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CamperListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

export const LoadMoreButton = styled.button`
  border: 1px solid;
  border-color: ${(p) => p.theme.colors.buttonBorderColor};
  background-color: ${(p) => p.theme.colors.whiteColor};
  border-radius: 200px;
  padding: 16px 32px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  outline: none;
  color: ${(p) => p.theme.colors.textTitleColor};

  transition: border-color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    border-color: ${(p) => p.theme.colors.redColor};
  }
`;

export const CatalogTitle = styled.h1`
  margin-top: 24px;
  margin-bottom: 44px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.textTitleColor};
`;
