import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setLocationFilter } from '../../redux/filterSlice';
import {
  LocationField,
  FilterLabel,
  FilterInput,
  FilterWrapper,
  FilterIcon,
  AsideWrapper,
} from './Aside.styled';

export const Aside = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = (event) =>
    dispatch(setLocationFilter(event.target.value));

  return (
    <AsideWrapper>
      <LocationField>
        <FilterLabel>Location</FilterLabel>
        <FilterWrapper>
          <FilterInput
            type="text"
            name="filter"
            placeholder="Kyiv, Ukraine"
            value={filter}
            onChange={changeFilter}
          ></FilterInput>
          <FilterIcon />
        </FilterWrapper>
      </LocationField>
    </AsideWrapper>
  );
};
