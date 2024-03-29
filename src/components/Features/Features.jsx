import * as c from './Features.styled';
import {
  TbAutomaticGearbox,
  TbToolsKitchen2,
  TbAirConditioning,
  TbRadio,
  TbToiletPaper,
} from 'react-icons/tb';
import { IoBedOutline, IoWaterOutline } from 'react-icons/io5';
import { LuShowerHead, LuMicrowave } from 'react-icons/lu';
import { LiaCompactDiscSolid } from 'react-icons/lia';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { HiFire } from 'react-icons/hi';
import icons from '../../images/icons.svg';

export const Features = ({ camper }) => {
  return (
    <div>
      <c.DetailsList>
        <c.DetailsItems>
          <c.FeatureIcon>
            <use href={`${icons}#icon-users`} />
          </c.FeatureIcon>
          <c.DetailsText>{`${camper.adults} adults`}</c.DetailsText>
        </c.DetailsItems>
        <c.DetailsItems>
          <TbAutomaticGearbox style={{ width: '20', height: '20' }} />
          <c.DetailsText>{camper.transmission}</c.DetailsText>
        </c.DetailsItems>
        <c.DetailsItems>
          <c.FeatureIcon>
            <use href={`${icons}#icon-ac`} />
          </c.FeatureIcon>
          <c.DetailsText>AC</c.DetailsText>
        </c.DetailsItems>
        <c.DetailsItems>
          <c.FeatureIcon>
            <use href={`${icons}#icon-petrol`} />
          </c.FeatureIcon>
          <c.DetailsText>{camper.engine}</c.DetailsText>
        </c.DetailsItems>
        {camper.details.kitchen !== 0 && (
          <c.DetailsItems>
            <TbToolsKitchen2 style={{ width: '20', height: '20' }} />
            <c.DetailsText>Kitchen</c.DetailsText>
          </c.DetailsItems>
        )}
        <c.DetailsItems>
          <IoBedOutline style={{ width: '20', height: '20' }} />
          <c.DetailsText>{`${camper.details.beds} beds`}</c.DetailsText>
        </c.DetailsItems>
        {camper.details.airConditioner !== 0 && (
          <c.DetailsItems>
            <TbAirConditioning style={{ width: '20', height: '20' }} />
            <c.DetailsText>Air conditioner</c.DetailsText>
          </c.DetailsItems>
        )}
        {camper.details.CD !== 0 && (
          <c.DetailsItems>
            <LiaCompactDiscSolid style={{ width: '20', height: '20' }} />
            <c.DetailsText>CD</c.DetailsText>
          </c.DetailsItems>
        )}
        {camper.details.radio !== 0 && (
          <c.DetailsItems>
            <TbRadio style={{ width: '20', height: '20' }} />
            <c.DetailsText>Radio</c.DetailsText>
          </c.DetailsItems>
        )}
        {camper.details.hob !== 0 && (
          <c.DetailsItems>
            <c.FeatureIcon>
              <use href={`${icons}#icon-hob`} />
            </c.FeatureIcon>
            <c.DetailsText>{`${camper.details.hob} hob`}</c.DetailsText>
          </c.DetailsItems>
        )}
        {camper.details.toilet !== 0 && (
          <c.DetailsItems>
            <TbToiletPaper style={{ width: '20', height: '20' }} />
            <c.DetailsText>Toilet</c.DetailsText>
          </c.DetailsItems>
        )}
        {camper.details.shower !== 0 && (
          <c.DetailsItems>
            <LuShowerHead style={{ width: '20', height: '20' }} />
            <c.DetailsText>Shower</c.DetailsText>
          </c.DetailsItems>
        )}
        {camper.details.freezer !== 0 && (
          <c.DetailsItems>
            <CgSmartHomeRefrigerator style={{ width: '20', height: '20' }} />
            <c.DetailsText>Freezer</c.DetailsText>
          </c.DetailsItems>
        )}
        {camper.details.gas !== '' && (
          <c.DetailsItems>
            <HiFire style={{ width: '20', height: '20' }} />
            <c.DetailsText>Gas</c.DetailsText>
          </c.DetailsItems>
        )}
        {camper.details.water !== '' && (
          <c.DetailsItems>
            <IoWaterOutline style={{ width: '20', height: '20' }} />
            <c.DetailsText>Water</c.DetailsText>
          </c.DetailsItems>
        )}
        {camper.details.microwave !== 0 && (
          <c.DetailsItems>
            <LuMicrowave style={{ width: '20', height: '20' }} />
            <c.DetailsText>Microwave</c.DetailsText>
          </c.DetailsItems>
        )}
      </c.DetailsList>
      <div>
        <c.FeaturesTitle>Vehicle details</c.FeaturesTitle>
        <ul>
          <c.FeaturesDetailsItem>
            <c.FeaturesDetailsItemText>Form</c.FeaturesDetailsItemText>
            <c.FeaturesDetailsItemText>{camper.form}</c.FeaturesDetailsItemText>
          </c.FeaturesDetailsItem>
          <c.FeaturesDetailsItem>
            <c.FeaturesDetailsItemText>Length</c.FeaturesDetailsItemText>
            <c.FeaturesDetailsItemText>
              {camper.length}
            </c.FeaturesDetailsItemText>
          </c.FeaturesDetailsItem>
          <c.FeaturesDetailsItem>
            <c.FeaturesDetailsItemText>Width</c.FeaturesDetailsItemText>
            <c.FeaturesDetailsItemText>
              {camper.width}
            </c.FeaturesDetailsItemText>
          </c.FeaturesDetailsItem>
          <c.FeaturesDetailsItem>
            <c.FeaturesDetailsItemText>Height</c.FeaturesDetailsItemText>
            <c.FeaturesDetailsItemText>
              {camper.height}
            </c.FeaturesDetailsItemText>
          </c.FeaturesDetailsItem>
          <c.FeaturesDetailsItem>
            <c.FeaturesDetailsItemText>Tank</c.FeaturesDetailsItemText>
            <c.FeaturesDetailsItemText>{camper.tank}</c.FeaturesDetailsItemText>
          </c.FeaturesDetailsItem>
          <c.FeaturesDetailsItem>
            <c.FeaturesDetailsItemText>Consumption</c.FeaturesDetailsItemText>
            <c.FeaturesDetailsItemText>
              {camper.consumption}
            </c.FeaturesDetailsItemText>
          </c.FeaturesDetailsItem>
        </ul>
      </div>
    </div>
  );
};
