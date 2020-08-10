import styled from 'styled-components';

export const Heading = styled.h2.attrs(() => ({
  className: 'display-4 font-weight-bold pt-3 mb-2 mx-5',
}))`
  color: #968c8c;
  background-color: 'inherit';
`;

export const Paragraph = styled.p.attrs(() => ({
  className: 'pt-3 mb-2 mx-5',
}))`
  font-size: x-large;
`;
