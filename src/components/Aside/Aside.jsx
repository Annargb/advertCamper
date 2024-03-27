import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocationFilter } from '../../redux/selectors';
import {
  updateLocationFilter,
  updateVanType,
  resetFilters,
} from '../../redux/filterSlice';
import * as c from './Aside.styled';
import icons from '../../images/icons.svg';

export const Aside = () => {
  const locationFilter = useSelector(selectLocationFilter);
  const dispatch = useDispatch();
  const [carType, setCarType] = useState('');

  const changeLocationFilter = (event) =>
    dispatch(updateLocationFilter(event.target.value));

  const changeCarType = (event) => {
    setCarType(event.target.value);
  };

  const applyFilters = () => {
    dispatch(updateVanType(carType));
  };

  const handleResetFilters = () => {
    setCarType('');
    dispatch(resetFilters());
  };

  return (
    <c.AsideWrapper>
      <c.LocationField>
        <c.LocationLabel>Location</c.LocationLabel>
        <c.LocationFilterWrapper>
          <c.LocationInput
            type="text"
            name="filter"
            placeholder="City"
            value={locationFilter}
            onChange={changeLocationFilter}
          ></c.LocationInput>
          <c.FilterIcon />
        </c.LocationFilterWrapper>
      </c.LocationField>

      <c.TypeForm id="typeVansForm">
        <c.FilterLabel>Filters</c.FilterLabel>
        <c.FilterTypeTitle>Vehicle type</c.FilterTypeTitle>
        <c.CheckboxWrapper>
          <c.CustomCheckbox
            checked={carType === 'panelTruck'}
            style={{ padding: '19px 30px' }}
          >
            <c.CheckboxInput
              type="radio"
              name="camperType"
              value="panelTruck"
              onChange={changeCarType}
            />{' '}
            <c.CheckboxIcon>
              <use href={`${icons}#icon-camper3`} />
            </c.CheckboxIcon>
            <c.CheckboxText>Van</c.CheckboxText>
          </c.CustomCheckbox>
          <c.CustomCheckbox checked={carType === 'fullyIntegrated'}>
            <c.CheckboxInput
              type="radio"
              name="camperType"
              value="fullyIntegrated"
              onChange={changeCarType}
            />{' '}
            <c.CheckboxIcon>
              <use href={`${icons}#icon-camper2`} />
            </c.CheckboxIcon>
            <c.CheckboxText>Fully Integrated</c.CheckboxText>
          </c.CustomCheckbox>
          <c.CustomCheckbox
            checked={carType === 'alcove'}
            style={{ padding: '19px 30px' }}
          >
            <c.CheckboxInput
              type="radio"
              name="camperType"
              value="alcove"
              onChange={changeCarType}
            />{' '}
            <c.CheckboxIcon>
              <use href={`${icons}#icon-camper1`} />
            </c.CheckboxIcon>
            <c.CheckboxText>Alcove</c.CheckboxText>
          </c.CustomCheckbox>
        </c.CheckboxWrapper>
      </c.TypeForm>

      <c.ButtonWrapper>
        <c.FiltersButton onClick={applyFilters}>Search</c.FiltersButton>
        <c.FiltersButton
          onClick={handleResetFilters}
          style={{ padding: '16px 40px' }}
        >
          Reset filters
        </c.FiltersButton>
      </c.ButtonWrapper>
    </c.AsideWrapper>
  );
};
