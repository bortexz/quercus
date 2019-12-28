import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SideBar from './index';

afterEach(cleanup);

it('renders', () => {
  const { asFragment } = render(<SideBar />);
  expect(asFragment()).toMatchSnapshot();
});
