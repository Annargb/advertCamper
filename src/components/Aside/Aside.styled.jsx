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

export const FilterLabel = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.inputsText};
`;

export const FilterInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  padding: 18px 18px 18px 44px;
  width: 360px;
  height: 56px;
  border: none;
  border-radius: 10px;
  background-color: ${(p) => p.theme.colors.inputsColor};
  color: ${(p) => p.theme.colors.inputsText};
  outline: none;

  &:focus {
    border: 1px solid ${(p) => p.theme.colors.redColor};
  }

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${(p) => p.theme.colors.inputsText};
  }
`;

export const FilterWrapper = styled.div`
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
