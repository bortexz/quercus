import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './index';

afterEach(cleanup);

jest.mock('../SideBar', () => {
  const MockSideBar = () => <div />;
  return MockSideBar;
});

jest.mock('../GridView', () => {
  const MockGridView = () => <div />;
  return MockGridView;
});

it('Testing if it contains sidebar component is rendered', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
