import * as c from './CamperDetails.styled';
import { TbAutomaticGearbox, TbToolsKitchen2 } from 'react-icons/tb';
import { IoBedOutline } from 'react-icons/io5';
import icons from '../../images/icons.svg';

export const CamperDetails = ({ camper }) => {
  return (
    <c.DetailsList>
      <c.DetailsItems>
        <c.DetailsIcon>
          <use href={`${icons}#icon-users`} />
        </c.DetailsIcon>
        <c.DetailsText>{`${camper.adults} adults`}</c.DetailsText>
      </c.DetailsItems>
      <c.DetailsItems>
        <TbAutomaticGearbox style={{ width: '20', height: '20' }} />
        <c.DetailsText>{camper.transmission}</c.DetailsText>
      </c.DetailsItems>
      <c.DetailsItems>
        <c.DetailsIcon>
          <use href={`${icons}#icon-petrol`} />
        </c.DetailsIcon>
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
        <c.DetailsIcon>
          <use href={`${icons}#icon-ac`} />
        </c.DetailsIcon>
        <c.DetailsText>AC</c.DetailsText>
      </c.DetailsItems>
    </c.DetailsList>
  );
};
