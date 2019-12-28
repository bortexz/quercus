import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './index';

afterEach(cleanup);

it('renders', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
