import styled from 'styled-components';

export const DetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;
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

export const FeaturesTitle = styled.h3`
  padding-bottom: 24px;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.textTitleColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.featuresBorderColor};
`;

export const FeaturesDetailsItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FeaturesDetailsItemText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: ${(p) => p.theme.colors.textTitleColor};
  text-transform: capitalize;
`;

export const FeatureIcon = styled.svg`
  width: 20px;
  height: 20px;
`;
