import styled from 'styled-components';

export const DetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const DetailsItems = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  padding: 12px 18px;
  height: 44px;
  background-color: ${(p) => p.theme.colors.bgDetailsColor};
`;

export const DetailsText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  text-transform: capitalize;
  color: ${(p) => p.theme.colors.textTitleColor};
`;
