import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Icon from './index';

afterEach(cleanup);

const icons = ['desktop', 'download', 'home', 'image', 'recent', 'trash'];

it('check if all icons are same', () => {
  const AllIcons = () => (
    <>
      {icons.map(icon => (
        <Icon key={icon} type={icon} />
      ))}
    </>
  );

  const { asFragment } = render(<AllIcons />);
  expect(asFragment()).toMatchSnapshot();
});
