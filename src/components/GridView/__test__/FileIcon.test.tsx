import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FileIcon from '../FileIcon';

afterEach(cleanup);

describe('File icon is rendered correctly', () => {
  it('renders image icon', () => {
    const { asFragment } = render(<FileIcon type="jpg" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders video icon', () => {
    const { asFragment } = render(<FileIcon type="mp4" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders file icon', () => {
    const { asFragment } = render(<FileIcon type="xkcd" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
