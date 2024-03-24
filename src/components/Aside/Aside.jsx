import { useDispatch } from 'react-redux';
// import { selectLocationFilter } from '../../redux/selectors';
import {
  // updateLocationFilter,
  // updateVanType,
  updateFilter,
} from '../../redux/filterSlice';
import {
  LocationField,
  FilterLabel,
  FilterInput,
  FilterWrapper,
  FilterIcon,
  AsideWrapper,
} from './Aside.styled';
import { useState } from 'react';

export const Aside = () => {
  const dispatch = useDispatch();
  const [carType, setCarType] = useState('');
  const [locationValue, setLocationValue] = useState('');

  const changeLocationFilter = (event) => setLocationValue(event.target.value);

  const changeCarType = (event) => {
    setCarType(event.target.value);
  };

  const applyFilters = () => {
    dispatch(updateFilter({ location: locationValue, vanType: carType }));
    // dispatch(updateLocationFilter(locationValue));
    // dispatch(updateVanType(carType));
  };

  return (
    <AsideWrapper>
      <LocationField>
        <FilterLabel>Location</FilterLabel>
        <FilterWrapper>
          <FilterInput
            type="text"
            name="filter"
            placeholder="Kyiv, Ukraine"
            value={locationValue}
            onChange={changeLocationFilter}
          ></FilterInput>
          <FilterIcon />
        </FilterWrapper>
      </LocationField>

      <form id="carForm">
        <label>
          <input
            type="radio"
            name="camperType"
            value="panelTruck"
            checked={carType === 'panelTruck'}
            onChange={changeCarType}
          />{' '}
          Van
        </label>
        <label>
          <input
            type="radio"
            name="camperType"
            value="fullyIntegrated"
            checked={carType === 'fullyIntegrated'}
            onChange={changeCarType}
          />{' '}
          Fully Integrated
        </label>
        <label>
          <input
            type="radio"
            name="camperType"
            value="alcove"
            checked={carType === 'alcove'}
            onChange={changeCarType}
          />{' '}
          Alcove
        </label>
      </form>

      <button onClick={applyFilters}>Search</button>
    </AsideWrapper>
  );
};

// import { useDispatch } from 'react-redux';
// // import { selectLocationFilter } from '../../redux/selectors';
// import { updateLocationFilter, updateVanType } from '../../redux/filterSlice';
// import {
//   LocationField,
//   FilterLabel,
//   FilterInput,
//   FilterWrapper,
//   FilterIcon,
//   AsideWrapper,
// } from './Aside.styled';
// import { useState } from 'react';

// export const Aside = () => {
//   // const locationFilter = useSelector(selectLocationFilter);
//   const dispatch = useDispatch();
//   const [carType, setCarType] = useState('');
//   const [locationValue, setLocationValue] = useState('');

//   const changeLocationFilter = (event) => setLocationValue(event.target.value);

//   const changeCarType = (event) => {
//     setCarType(event.target.value);
//   };

//   const applyFilters = () => {
//     dispatch(updateLocationFilter(locationValue));
//     dispatch(updateVanType(carType));
//   };

//   return (
//     <AsideWrapper>
//       <LocationField>
//         <FilterLabel>Location</FilterLabel>
//         <FilterWrapper>
//           <FilterInput
//             type="text"
//             name="filter"
//             placeholder="Kyiv, Ukraine"
//             value={locationValue}
//             onChange={changeLocationFilter}
//           ></FilterInput>
//           <FilterIcon />
//         </FilterWrapper>
//       </LocationField>

//       <form id="carForm">
//         <label>
//           <input
//             type="radio"
//             name="camperType"
//             value="panelTruck"
//             checked={carType === 'panelTruck'}
//             onChange={changeCarType}
//           />{' '}
//           Van
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="camperType"
//             value="fullyIntegrated"
//             checked={carType === 'fullyIntegrated'}
//             onChange={changeCarType}
//           />{' '}
//           Fully Integrated
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="camperType"
//             value="alcove"
//             checked={carType === 'alcove'}
//             onChange={changeCarType}
//           />{' '}
//           Alcove
//         </label>
//       </form>

//       <button onClick={applyFilters}>Search</button>
//     </AsideWrapper>
//   );
// };
