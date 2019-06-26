import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';
import { globalVars as vars } from '../../styles';
import { Button } from '../../components';

const SearchFieldComponentWrapper = styled.div``;

const SearchFieldWrapper = styled.div`
  display: flex;
`;

const SearchFieldLabel = styled.label`
  display: block;
  margin: 0.67em 0;
  font-size: 1rem;
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

export default function SearchField({ onSearch }) {
  const inputRef = useRef();

  const handleSearch = function() {
    onSearch(inputRef.current.value);
  };

  const handleInputKeyPress = function(event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchFieldComponentWrapper>
      <SearchFieldLabel htmlFor="search-field">
        Search Repositories
      </SearchFieldLabel>
      <SearchFieldWrapper>
        <SearchFieldInput
          type="text"
          name="search-field"
          placeholder="ex: Ruby on Rails"
          ref={inputRef}
          onKeyPress={handleInputKeyPress}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchFieldWrapper>
    </SearchFieldComponentWrapper>
  );
}

SearchField.propTypes = {
  onSearch: PropTypes.func,
};
