import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { rgba, darken } from 'polished';
import { globalVars as vars } from '../styles';
import { GoStar } from 'react-icons/go';

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

// Use a CSS mixin based on `starred` property due to how StyledComponents
// renders elements:
// Reference: https://github.com/styled-components/styled-components/issues/1198
const Star = styled(GoStar)`
  margin-right: 0.3rem;
  ${props =>
    props.starred
      ? css`
          fill: #f1c40f;
        `
      : css`
          fill: #666699e6;
        `}
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
  cursor: pointer;

  &:hover {
    color: #f1c40f;

    > ${Star} {
      fill: #f1c40f;
    }
  }
`;

const RepoDescription = styled.p`
  margin: 0px;
`;

export default function RepoItem({ name, description, url, viewerHasStarred }) {
  const [starred, setStarred] = useState(viewerHasStarred);

  const toggleStarItem = () => {
    setStarred(!starred);
  };

  return (
    <RepoItemWrapper>
      <RepoInfo>
        <RepoName href={url}>{name}</RepoName>
        {description && <RepoDescription>{description}</RepoDescription>}
      </RepoInfo>
      <RepoActions onClick={toggleStarItem}>
        <Star />
        {starred ? 'Starred' : 'Star'}
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
