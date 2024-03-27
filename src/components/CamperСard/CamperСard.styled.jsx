import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa6';
import { GoStarFill } from 'react-icons/go';
import { CiLocationOn } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';

export const CardWrapper = styled.li`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  border: 1px solid ${(p) => p.theme.colors.cardBorder};
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CamperTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CamperTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.textTitleColor};
  max-width: 340px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CamperImg = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
`;

export const CamperDescription = styled.p`
  width: 100%;
  max-width: 525px;
  margin-bottom: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${(p) => p.theme.colors.textColor};
`;

export const CamperSubtitleText = styled.p`
  display: inline-block;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.textTitleColor};
`;

export const CamperSubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  /* gap: 16px; */
  margin-bottom: 24px;
`;

export const ShowMoreButton = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.whiteColor};
  background-color: ${(p) => p.theme.colors.redColor};
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  outline: none;
  transition: background-color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.hoverButtonColor};
  }
`;

export const HeartIcon = styled(FaRegHeart)`
  width: 24px;
  height: 24px;
  stroke: ${(p) => p.theme.colors.textTitleColor};
  stroke-width: 2.3px;
  transition:
    fill 250ms ${(p) => p.theme.transition},
    stroke 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    fill: ${(p) => p.theme.colors.redColor};
    stroke: ${(p) => p.theme.colors.redColor};
  }
`;

export const PressedHeartIcon = styled(FaHeart)`
  width: 24px;
  height: 24px;
  fill: ${(p) => p.theme.colors.redColor};
  transition: fill 250ms ${(p) => p.theme.transition};

  &:hover {
    fill: ${(p) => p.theme.colors.hoverButtonColor};
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const StarIcon = styled(GoStarFill)`
  fill: ${(p) => p.theme.colors.yellowColor};
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const LocationIcon = styled(CiLocationOn)`
  stroke: ${(p) => p.theme.colors.textTitleColor};
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const Location = styled.svg`
  fill: ${(p) => p.theme.colors.textTitleColor};
  width: 16px;
  height: 16px;
`;

export const ButtonFavoriteCamper = styled.button`
  background: none;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
