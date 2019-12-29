import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MenuItem from './index';

afterEach(cleanup);

it('Rendering the passed text', () => {
  jest.mock('../../../utils', () => {
    return {
      getPath: (name: string) => name,
    };
  });

  // const {} = render(<MenuItem name="desktop" text="desktop" />);
  // expect(asFragment()).toMatchSnapshot();
});
