import { Field as FormikField, ErrorMessage as FormikError } from 'formik';
import styled from 'styled-components';

export const BookFormWrapper = styled.div`
  flex-shrink: 0;
  border: 1px solid ${(p) => p.theme.colors.cardBorder};
  border-radius: 10px;
  padding: 24px;
  width: 448px;
  min-height: 532px;
  max-height: 574px;
`;

export const FormTitle = styled.h3`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.textTitleColor};
`;

export const BookFormText = styled.p`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.textColor};
`;

export const Field = styled(FormikField)`
  padding: 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.inputsText};
  border-radius: 10px;
  background-color: ${(p) => p.theme.colors.inputsColor};
  outline: none;
  border: none;
  height: 56px;

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

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikError)`
  font-size: 12px;
  color: ${(p) => p.theme.colors.redColor};
`;

export const FormButton = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.whiteColor};
  background-color: ${(p) => p.theme.colors.redColor};
  border: none;
  border-radius: 200px;
  padding: 16px 60px;
  width: 160px;
  height: 56px;
  transition: background-color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.hoverButtonColor};
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 400px;
`;
