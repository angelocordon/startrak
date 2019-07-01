import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './index';

describe('<HomePage />', () => {
  const page = shallow(<HomePage />);

  it('renders correctly', () => {
    expect(page).toMatchSnapshot();
  });

  it('should have a sign up button', () => {
    expect(page.render().find('button')).toHaveLength(1);
  });
});
