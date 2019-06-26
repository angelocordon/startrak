import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { rgba, darken } from 'polished';
import { globalVars as vars } from '../styles';

const RepoItemWrapper = styled.div`
  margin-top: 1.2rem;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0px 10px 12px -6px ${rgba('#2c3e50', 0.1)};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${rgba(vars.black, 0.85)};
    background-color: #fff;
    border-color: transparent;
    box-shadow: 0px 10px 12px -6px ${rgba('#2c3e50', 0.3)};
    transform: translateY(-0.2rem);
  }
`;

const RepoInfo = styled.div`
  padding: 0.5rem;
`;

const RepoName = styled.a`
  font-weight: bold;
  font-size: 0.9rem;
  text-decoration: none;
  color: #f67f5a;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${darken(0.2, '#f67f5a')};
  }
`;

const Star = styled.svg`
  fill: ${props => (props.starred ? '#f1c40f' : '#666699e6')};
  margin-right: 0.3rem;
`;

const RepoActions = styled.div`
  display: flex;
  padding: 0 0.5rem;
  height: 2.5rem;
  align-items: center;
  color: ${rgba(vars.black, 0.9)};
  font-size: 0.8rem;
  font-weight: bold;
  border-top: 1px solid ${rgba(vars.black, 0.1)};
`;

const RepoDescription = styled.p`
  margin: 0px;
`;

export default function RepoItem({ name, description, url, viewerHasStarred }) {
  return (
    <RepoItemWrapper>
      <RepoInfo>
        <RepoName href={url}>{name}</RepoName>
        {description && <RepoDescription>{description}</RepoDescription>}
      </RepoInfo>
      <RepoActions>
        <Star
          viewBox="0 0 14 16"
          version="1.1"
          width="14"
          height="16"
          aria-hidden="true"
          starred={viewerHasStarred}
        >
          <path
            fillRule="evenodd"
            d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
          ></path>
        </Star>
        {viewerHasStarred ? 'Starred' : 'Star'}
      </RepoActions>
    </RepoItemWrapper>
  );
}

RepoItem.propTypes = {
  name: propTypes.string,
  description: propTypes.string,
  url: propTypes.string,
  viewerHasStarred: propTypes.bool,
};
