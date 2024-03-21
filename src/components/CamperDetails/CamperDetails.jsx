import * as c from './CamperDetails.styled';
import { TbAutomaticGearbox } from 'react-icons/tb';
import { TbToolsKitchen2 } from 'react-icons/tb';
import { IoBedOutline } from 'react-icons/io5';
import icons from '../../images/icons.svg';

export const CamperDetails = ({ camper }) => {
  return (
    <c.DetailsList>
      <c.DetailsItems>
        <svg style={{ width: '20', height: '20' }}>
          <use href={`${icons}#icon-users`} />
        </svg>
        <c.DetailsText>{`${camper.adults} adults`}</c.DetailsText>
      </c.DetailsItems>
      <c.DetailsItems>
        <TbAutomaticGearbox style={{ width: '20', height: '20' }} />
        <c.DetailsText>{camper.transmission}</c.DetailsText>
      </c.DetailsItems>
      <c.DetailsItems>
        <svg style={{ width: '20', height: '20' }}>
          <use href={`${icons}#icon-petrol`} />
        </svg>
        <c.DetailsText>{camper.engine}</c.DetailsText>
      </c.DetailsItems>
      <c.DetailsItems>
        <TbToolsKitchen2 style={{ width: '20', height: '20' }} />
        <c.DetailsText>Kitchen</c.DetailsText>
      </c.DetailsItems>
      <c.DetailsItems>
        <IoBedOutline style={{ width: '20', height: '20' }} />
        <c.DetailsText>{`${camper.details.beds} beds`}</c.DetailsText>
      </c.DetailsItems>
      <c.DetailsItems>
        <svg style={{ width: '20', height: '20' }}>
          <use href={`${icons}#icon-ac`} />
        </svg>
        <c.DetailsText>AC</c.DetailsText>
      </c.DetailsItems>
    </c.DetailsList>
  );
};
