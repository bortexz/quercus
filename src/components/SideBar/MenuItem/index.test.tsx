import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MenuItem from './index';

afterEach(cleanup);

it('renders', () => {
  // const { asFragment } = render(<MenuItem name="desktop" text="desktop" />);
  // expect(asFragment()).toMatchSnapshot();
});
