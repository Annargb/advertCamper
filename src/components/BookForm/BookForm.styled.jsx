import { Field as FormikField, ErrorMessage as FormikError } from 'formik';
import styled, { createGlobalStyle } from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  color: ${(p) => p.theme.colors.textTitleColor};
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

export const StyledDataPicker = styled(DatePicker)`
  width: 400px;
  padding: 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.textTitleColor};
  border-radius: 10px;
  background-color: ${(p) => p.theme.colors.inputsColor};
  outline: none;
  border: none;
  height: 56px;

  &:focus {
    border: 1px solid ${(p) => p.theme.colors.redColor};
    color: ${(p) => p.theme.colors.textTitleColor};
  }

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${(p) => p.theme.colors.inputsText};
  }
`;

export const CalendarGlobalStyles = createGlobalStyle`

  .sc-iLXxbI .react-datepicker__wrapper {
    position: relative;
  }
  .sc-iLXxbI .react-datepicker {
    position: relative;
    left: 0;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 325px;
    min-height: 273px;
    padding: 16px;
    /* background-color:  #fff; */
    background-color:  ${(p) => p.theme.colors.whiteColor};
    font-family: "Inter", sans-serif;;
    border-radius: 12px;
  }
  .sc-iLXxbI .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
    width: 100%;
  }
  .sc-iLXxbI .react-datepicker__header {
    position: relative;
    background-color: #fff;
    
  }
  .sc-iLXxbI .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .sc-iLXxbI .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 1px solid rgb(174 174 174 / 0%);

    padding: 0;
  }
  .sc-iLXxbI .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
  }
  .sc-iLXxbI .react-datepicker__current-month {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 1.2;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    color: #101828;
    margin-bottom: 20px;

  }
  .sc-iLXxbI .react-datepicker__day-name {
    text-transform: uppercase;
    margin: 0;
    font-family: "Inter", sans-serif;;
    font-size: 12px;
    line-height: 1.2;
    font-style: normal;
    font-weight: 600;
    color: #475467;
    text-align: center;
   
  }
  
  .sc-iLXxbI .react-datepicker__navigation {
    margin-top: 19px;
    color: #101828;
  }
  .sc-iLXxbI .react-datepicker__navigation--previous {
    top: -2px;
    left: 14px;
    width: 22px;
    height: 22px;
    color: #101828;
  }
  .sc-iLXxbI .react-datepicker__navigation--next {
    right: 14px;
    top: -2px;
    width: 22px;
    height: 22px;
    color: #101828;
  }
  .sc-iLXxbI .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .sc-iLXxbI .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 24px;
    height: 24px;
    /* width: 41px; */
    height: 22px;
    border-radius: 50%;
    color:  #101828;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    text-align: center;
  }
  .sc-iLXxbI .react-datepicker__month {
    display: flex;
    gap: 11px;
    /* row-gap: 6px; */
    /* gap: 11px; */
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
  .sc-iLXxbI .react-datepicker__day--selected {
    background-color: #040404;
    color:  #efede8;
    font-size: 14px;
  }
  .sc-iLXxbI .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: #040404;
  }
  .sc-iLXxbI .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: #040404;
    color:  #efede8;
  }
  .sc-iLXxbI .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: #040404;
    color:  #efede8;
  }
  .sc-iLXxbI .react-datepicker__day--outside-month {
  color: #475467;
  }
  .sc-iLXxbI .react-datepicker__day--disabled:hover {
  background-color: transparent;
  }
  .sc-iLXxbI .react-datepicker__day--disabled {
  color: #848484; 
  }
  .sc-iLXxbI .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .sc-iLXxbI .react-datepicker__triangle {
    visibility: hidden;
  }
  .sc-iLXxbI .react-datepicker__day-names {
    padding: 0;
  }
`;
