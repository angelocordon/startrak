import styled from 'styled-components';

export const Headline = styled.h1`
  font-size: ${props => (props.small ? '1rem' : '2em')}
  line-height: 1.3;
  text-transform: ${props => (props.small ? 'capitalize' : 'none')}
`;
