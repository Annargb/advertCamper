import styled from 'styled-components';
import { GoStarFill } from 'react-icons/go';
import { CiLocationOn } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

export const CloseButton = styled.button`
  background: none;
  padding: 0;
  border: none;
`;

export const ModalTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const ModalCamperTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.textTitleColor};
`;

export const CamperSubtitleModalWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const SubtitleModalWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: baseline;
  justify-content: center;
`;

export const StarIcon = styled(GoStarFill)`
  fill: ${(p) => p.theme.colors.yellowColor};
  width: 16px;
  height: 16px;
`;

export const CamperSubtitleModalText = styled.p`
  display: inline-block;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  /*  */
  /* text-decoration: underline;
  text-decoration-skip-ink: none; */
  color: ${(p) => p.theme.colors.textTitleColor};
`;

export const LocationIcon = styled(CiLocationOn)`
  stroke: ${(p) => p.theme.colors.textTitleColor};
  width: 16px;
  height: 16px;
`;

export const ModalPrice = styled.p`
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.textTitleColor};
`;

export const ModalImgWrapper = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const CamperModalImg = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
`;

export const CamperModalDescription = styled.p`
  margin-bottom: 44px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${(p) => p.theme.colors.textColor};
`;

export const TabWrapper = styled.ul`
  display: flex;
  gap: 40px;
  border-bottom: 1px solid;
  border-color: ${(p) => p.theme.colors.cardBorder};
  margin-bottom: 44px;
`;

export const BottomModalContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const TabButton = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.textTitleColor};
  background: none;
  padding: 0;
  border: 0;
  padding-bottom: 24px;
  border-bottom: ${(p) => (p.$active ? '5px solid' : 'none')};
  border-color: ${(p) => p.theme.colors.redColor};
`;

export const OverflowContainer = styled.div`
  height: 498px;
`;

export const CloseIcon = styled(IoMdClose)`
  width: 32px;
  height: 32px;
  fill: ${(p) => p.theme.colors.textTitleColor};
  transition: fill 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    fill: ${(p) => p.theme.colors.hoverButtonColor};
  }
`;
