import React from 'react';
import { shallow } from 'enzyme';
import SearchField from './index';

describe('<SearchField />', () => {
  const wrapper = shallow(<SearchField />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('<SearchField /> elements', () => {
    const Component = wrapper.render();
    const inputField = Component.find('input');
    const searchButton = Component.find('button');

    it('should properly render', () => {
      expect(inputField).toHaveLength(1);
      expect(searchButton).toHaveLength(1);
    });
  });
});
