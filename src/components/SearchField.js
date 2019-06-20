import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { globalVars as vars } from '../styles';
import { Button } from '../components';

const SearchFieldComponentWrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
`;

const SearchFieldWrapper = styled.div`
  display: flex;
`;

const SearchFieldLabel = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.8rem;
  font-weight: bolder;
  text-transform: capitalize;
`;

const SearchFieldInput = styled.input`
  display: flex;
  padding-left: 0.5rem;
  width: 100%;
  height: 2rem;
  border: 1px solid ${rgba(vars.black, 0.3)};
  border-radius: 3px 0px 0px 3px;
`;

const SearchButton = styled(Button)`
  display: flex;
  padding: 0 1rem;
  height: 2rem;
  background-color: #2c3e50;
  border: 1px solid ${rgba(vars.black, 0.5)};
  border-radius: 0px 3px 3px 0px;
  color: #fff;
`;

export default function SearchField() {
  return (
    <SearchFieldComponentWrapper>
      <SearchFieldLabel htmlFor="search-field">
        Repository Search Field
      </SearchFieldLabel>
      <SearchFieldWrapper>
        <SearchFieldInput
          type="text"
          name="search-field"
          placeholder="ex: Ruby on Rails"
        />
        <SearchButton>Search</SearchButton>
      </SearchFieldWrapper>
    </SearchFieldComponentWrapper>
  );
}
