import styled from 'styled-components';

export const CardWrapper = styled.li`
  border: 1px solid ${(p) => p.theme.colors.cardBorder};
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
`;

export const CamperName = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.textColor};
`;
