import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLocationFilter,
  selectCheckedEquipment,
} from '../../redux/selectors';
import {
  updateLocationFilter,
  updateVanType,
  updateEquipment,
  changeTransmission,
  resetFilters,
} from '../../redux/filterSlice';
import { showButton, hideButton } from '../../redux/catalogSlice';
import * as c from './Aside.styled';
import icons from '../../images/icons.svg';

export const Aside = () => {
  const locationFilter = useSelector(selectLocationFilter);
  const dispatch = useDispatch();
  const [transmission, setTransmission] = useState('');
  const [carType, setCarType] = useState('');
  const equipmentFromState = useSelector(selectCheckedEquipment);
  const [checkedEquipment, setCheckedEquipment] = useState(equipmentFromState);

  const changeEquipmentFilter = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedEquipment((prevState) => [...prevState, value]);
    } else {
      setCheckedEquipment((prevState) =>
        prevState.filter((item) => item !== name)
      );
    }
  };

  const changeLocalTransmission = (event) => {
    const { value, checked } = event.target;

    checked ? setTransmission(value) : setTransmission('');
  };

  const changeLocationFilter = (event) =>
    dispatch(updateLocationFilter(event.target.value.trim()));

  const changeCarType = (event) => {
    setCarType(event.target.value);
  };

  const applyFilters = () => {
    dispatch(updateVanType(carType));
    dispatch(updateEquipment(checkedEquipment));
    dispatch(hideButton());
    dispatch(changeTransmission(transmission));
  };

  const handleResetFilters = () => {
    setCarType('');
    setTransmission('');
    setCheckedEquipment([]);
    dispatch(resetFilters());
    dispatch(showButton());
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

      <c.FilterLabel>Filters</c.FilterLabel>

      <form id="equipmentForm">
        <c.FilterTypeTitle>Vehicle equipment</c.FilterTypeTitle>
        <div>
          <label>
            <input
              type="checkbox"
              name="equipment"
              value="airConditioner"
              checked={checkedEquipment.includes('airConditioner')}
              onChange={changeEquipmentFilter}
            />
            <span>AC</span>
          </label>

          <label>
            <input
              type="checkbox"
              name="equipment"
              value="automatic"
              checked={transmission === 'automatic'}
              onChange={changeLocalTransmission}
            />
            <span>Automatic</span>
          </label>

          <label>
            <input
              type="checkbox"
              name="equipment"
              value="kitchen"
              checked={checkedEquipment.includes('kitchen')}
              onChange={changeEquipmentFilter}
            />
            <span>Kitchen</span>
          </label>

          <label>
            <input
              type="checkbox"
              name="equipment"
              value="TV"
              checked={checkedEquipment.includes('TV')}
              onChange={changeEquipmentFilter}
            />
            <span>TV</span>
          </label>

          <label>
            <input
              type="checkbox"
              name="equipment"
              value="showerToilet"
              checked={checkedEquipment.includes('showerToilet')}
              onChange={changeEquipmentFilter}
            />
            <span>Shower/WC</span>
          </label>
        </div>
      </form>

      <c.TypeForm id="typeVansForm">
        <c.FilterTypeTitle>Vehicle type</c.FilterTypeTitle>
        <c.RadioWrapper>
          <c.CustomRadio
            checked={carType === 'panelTruck'}
            style={{ padding: '19px 30px' }}
          >
            <c.RadioInput
              type="radio"
              name="camperType"
              value="panelTruck"
              onChange={changeCarType}
            />{' '}
            <c.RadioIcon>
              <use href={`${icons}#icon-camper3`} />
            </c.RadioIcon>
            <c.RadioText>Van</c.RadioText>
          </c.CustomRadio>
          <c.CustomRadio checked={carType === 'fullyIntegrated'}>
            <c.RadioInput
              type="radio"
              name="camperType"
              value="fullyIntegrated"
              onChange={changeCarType}
            />{' '}
            <c.RadioIcon>
              <use href={`${icons}#icon-camper2`} />
            </c.RadioIcon>
            <c.RadioText>Fully Integrated</c.RadioText>
          </c.CustomRadio>
          <c.CustomRadio
            checked={carType === 'alcove'}
            style={{ padding: '19px 30px' }}
          >
            <c.RadioInput
              type="radio"
              name="camperType"
              value="alcove"
              onChange={changeCarType}
            />{' '}
            <c.RadioIcon>
              <use href={`${icons}#icon-camper1`} />
            </c.RadioIcon>
            <c.RadioText>Alcove</c.RadioText>
          </c.CustomRadio>
        </c.RadioWrapper>
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
