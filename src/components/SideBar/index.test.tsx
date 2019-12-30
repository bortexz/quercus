import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SideBar from './index';

afterEach(cleanup);

jest.mock('./MenuItem', () => {
  const MockMenuItem = ({ name, text }: { name: string; text: string }) => (
    <div data-name={name}>{text}</div>
  );
  return MockMenuItem;
});

it('Checking if there are all default options', () => {
  const { asFragment } = render(<SideBar />);
  expect(asFragment()).toMatchSnapshot();
});
