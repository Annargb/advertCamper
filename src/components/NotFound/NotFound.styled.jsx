import styled from 'styled-components';

export const NotfoundImg = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
`;

export const NotFoundText = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;

  color: ${(p) => p.theme.colors.textColor};
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;
