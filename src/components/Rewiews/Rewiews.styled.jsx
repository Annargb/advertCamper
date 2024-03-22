import styled from 'styled-components';

export const ReviewerNameContainer = styled.div`
  border-radius: 60px;
  width: 60px;
  height: 60px;
  background-color: ${(p) => p.theme.colors.bgDetailsColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReviewerNameLetter = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.redColor};
`;

export const ReviewerName = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;
  color: ${(p) => p.theme.colors.textTitleColor};
`;

export const TextReviews = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${(p) => p.theme.colors.textColor};
`;

export const NameWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
