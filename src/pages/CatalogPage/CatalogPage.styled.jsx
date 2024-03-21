import styled from 'styled-components';

export const CamperList = styled.ul`
  margin-bottom: 50px;
`;

export const LoadMoreButton = styled.button`
  border: 1px solid;
  border-color: ${(p) => p.theme.colors.buttonBorderColor};
  background-color: ${(p) => p.theme.colors.whiteColor};
  border-radius: 200px;
  padding: 16px 32px;
  width: 145px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.textTitleColor};
  transition: border-color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    border-color: ${(p) => p.theme.colors.redColor};
  }
`;
