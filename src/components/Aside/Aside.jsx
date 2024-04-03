import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocationFilter } from '../../redux/selectors';
import {
  updateLocationFilter,
  updateVanType,
  updateEquipment,
  changeTransmission,
  resetFilters,
} from '../../redux/filterSlice';
import { showButton, hideButton } from '../../redux/catalogSlice';
import * as c from './Aside.styled';
import { CommonIcon } from '../CommonIcon/CommonIcon';

export const Aside = () => {
  const locationFilter = useSelector(selectLocationFilter);
  const dispatch = useDispatch();
  const [transmission, setTransmission] = useState('');
  const [carType, setCarType] = useState('');
  const [checkedEquipment, setCheckedEquipment] = useState([]);

  useEffect(() => {
    setCarType('');
  }, []);

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

  const changeLocationFilter = (event) => {
    dispatch(updateLocationFilter(event.target.value.trim()));
    event.target.value.trim() === ''
      ? dispatch(showButton())
      : dispatch(hideButton());
  };

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
          <CommonIcon
            name="icon-map-pin"
            position="absolute"
            width="18px"
            height="20px"
            top="50%"
            left="18px"
            transform="translateY(-50%)"
            fill="rgba(16, 24, 40, 0.6)"
          />
        </c.LocationFilterWrapper>
      </c.LocationField>

      <c.FilterLabel>Filters</c.FilterLabel>

      <c.TypeForm id="equipmentForm">
        <c.FilterTypeTitle>Vehicle equipment</c.FilterTypeTitle>
        <c.CheckboxWrapper>
          <c.CustomCheckbox
            checked={checkedEquipment.includes('airConditioner')}
          >
            <c.CustomInput
              type="checkbox"
              name="equipment"
              value="airConditioner"
              onChange={changeEquipmentFilter}
            />
            <CommonIcon name="icon-ac" size="32px" marginB="8px" />
            <c.CustomInputText>AC</c.CustomInputText>
          </c.CustomCheckbox>

          <c.CustomCheckbox checked={transmission === 'automatic'}>
            <c.CustomInput
              type="checkbox"
              name="equipment"
              value="automatic"
              onChange={changeLocalTransmission}
            />
            <CommonIcon name="icon-automatic" size="32px" marginB="8px" />
            <c.CustomInputText>Automatic</c.CustomInputText>
          </c.CustomCheckbox>

          <c.CustomCheckbox checked={checkedEquipment.includes('kitchen')}>
            <c.CustomInput
              type="checkbox"
              name="equipment"
              value="kitchen"
              onChange={changeEquipmentFilter}
            />
            <CommonIcon name="icon-kitchen" size="32px" marginB="8px" />
            <c.CustomInputText>Kitchen</c.CustomInputText>
          </c.CustomCheckbox>

          <c.CustomCheckbox checked={checkedEquipment.includes('TV')}>
            <c.CustomInput
              type="checkbox"
              name="equipment"
              value="TV"
              onChange={changeEquipmentFilter}
            />
            <CommonIcon name="icon-tv" size="32px" marginB="8px" />
            <c.CustomInputText>TV</c.CustomInputText>
          </c.CustomCheckbox>

          <c.CustomCheckbox checked={checkedEquipment.includes('showerToilet')}>
            <c.CustomInput
              type="checkbox"
              name="equipment"
              value="showerToilet"
              onChange={changeEquipmentFilter}
            />
            <CommonIcon name="icon-shower" size="32px" marginB="8px" />
            <c.CustomInputText>Shower/WC</c.CustomInputText>
          </c.CustomCheckbox>
        </c.CheckboxWrapper>
      </c.TypeForm>

      <c.TypeForm id="typeVansForm">
        <c.FilterTypeTitle>Vehicle type</c.FilterTypeTitle>
        <c.RadioWrapper>
          <c.CustomRadio
            checked={carType === 'panelTruck'}
            style={{ padding: '19px 30px' }}
          >
            <c.CustomInput
              type="radio"
              name="camperType"
              value="panelTruck"
              onChange={changeCarType}
            />{' '}
            <CommonIcon
              name="icon-camper3"
              width="40px"
              height="28px"
              marginB="8px"
            />
            <c.CustomInputText>Van</c.CustomInputText>
          </c.CustomRadio>
          <c.CustomRadio checked={carType === 'fullyIntegrated'}>
            <c.CustomInput
              type="radio"
              name="camperType"
              value="fullyIntegrated"
              onChange={changeCarType}
            />{' '}
            <CommonIcon
              name="icon-camper2"
              width="40px"
              height="28px"
              marginB="8px"
            />
            <c.CustomInputText>Fully Integrated</c.CustomInputText>
          </c.CustomRadio>
          <c.CustomRadio
            checked={carType === 'alcove'}
            style={{ padding: '19px 30px' }}
          >
            <c.CustomInput
              type="radio"
              name="camperType"
              value="alcove"
              onChange={changeCarType}
            />{' '}
            <CommonIcon
              name="icon-camper1"
              width="40px"
              height="28px"
              marginB="8px"
            />
            <c.CustomInputText>Alcove</c.CustomInputText>
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
