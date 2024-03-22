import styled from 'styled-components';
import { GoStarFill } from 'react-icons/go';
import { CiLocationOn } from 'react-icons/ci';

// export const CustomCamperModalContent = styled.div`
//   / content {
//     top: 50%;
//     left: 50%;
//     right: auto;
//     bottom: auto;
//     width: 982px;
//     height: 720px;
//     overflow: auto;
//     padding: 40px;
//     border-radius: 20px;
//     margin-right: -50%;
//     transform: translate(-50%, -50%);

//     /* Стилізація скролбару */
//     ::-webkit-scrollbar {
//       width: 12px;
//     }

//     ::-webkit-scrollbar-thumb {
//       background-color: #888;
//       border-radius: 6px;
//     }

//     ::-webkit-scrollbar-thumb:hover {
//       background-color: #555;
//     }
//   }
// `;

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

export const CamperModalImgItem = styled.li`
  /* border-radius: 10px;
  width: 290px;
  height: 310px; */
`;

export const CamperModalImg = styled.img`
  /* overflow: hidden; */
  border-radius: 10px;
  width: 290px;
  height: 310px;
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
`;
