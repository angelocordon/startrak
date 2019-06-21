import React from 'react';
import styled from 'styled-components';

const LoadingElement = styled.div`
  display: flex;
  position: relative;
  margin: 2rem auto;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 2rem;
  padding-left: 3rem;

  &::before {
    position: absolute;
    left: 0px;
    display: block;
    height: 2rem;
    width: 2rem;
    display: block;
    border-radius: 50%;
    border: 2px dotted #2b3e50;
    content: '';
    animation: spin 8s infinite linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default function LoadingUI() {
  return <LoadingElement>Fetching...</LoadingElement>;
}
