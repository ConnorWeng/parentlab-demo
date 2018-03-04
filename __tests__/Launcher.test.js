import React from 'react';
import Launcher from '../screen/Launcher';

import renderer from 'react-test-renderer';

jest.mock('react-redux', () => {
  return {
    connect: () => (component) => component
  };
});

it('renders correctly', () => {
  const rendered = renderer.create(<Launcher/>).toJSON();
  expect(rendered).toMatchSnapshot();
});
