import styled from 'styled-components';
import { CiLocationOn } from 'react-icons/ci';

export const AsideWrapper = styled.div`
  flex-shrink: 0;
`;

export const LocationField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 360px;
  margin-bottom: 32px;
`;

export const LocationLabel = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.inputsText};
`;

export const LocationInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  padding: 18px 18px 18px 44px;
  width: 360px;
  height: 56px;
  border: none;
  border-radius: 10px;
  background-color: ${(p) => p.theme.colors.inputsColor};
  color: ${(p) => p.theme.colors.textTitleColor};
  outline: none;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${(p) => p.theme.colors.inputsText};
  }

  &:focus {
    border: 1px solid ${(p) => p.theme.colors.redColor};
  }
`;

export const LocationFilterWrapper = styled.div`
  position: relative;
`;

export const FilterIcon = styled(CiLocationOn)`
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-50%);
  width: 18px;
  height: 20px;
  fill: ${(p) => p.theme.colors.textTitleColor};
`;

export const FilterLabel = styled.p`
  margin-bottom: 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.textColor};
`;

export const FilterTypeTitle = styled.h3`
  padding-bottom: 24px;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.textTitleColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.featuresBorderColor};
`;

export const TypeForm = styled.form`
  margin-bottom: 64px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CustomRadio = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 1px solid;
  border-radius: 10px;
  max-width: 128px;
  min-height: 100px;
  padding: 9.5px 24px;

  border-color: ${(p) =>
    p.checked
      ? (p) => p.theme.colors.redColor
      : (p) => p.theme.colors.cardBorder};
  transition: border-color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    border-color: ${(p) => p.theme.colors.redColor};
  }
`;

export const RadioInput = styled.input`
  opacity: 0;
  position: absolute;
`;

export const RadioText = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${(p) => p.theme.colors.textTitleColor};
`;

export const RadioIcon = styled.svg`
  width: 40px;
  height: 28px;
  flex-shrink: 0;
  margin-bottom: 8px;
`;

export const FiltersButton = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.whiteColor};
  background-color: ${(p) => p.theme.colors.redColor};
  border-radius: 200px;
  padding: 16px 60px;
  max-width: 174px;
  outline: none;
  transition: background-color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.hoverButtonColor};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
