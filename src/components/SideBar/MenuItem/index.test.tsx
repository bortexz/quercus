import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import MenuItem from './index';

afterEach(cleanup);

jest.mock('../../../utils', () => {
  return {
    getPath: (name: string) => name,
  };
});

const mockStore = configureStore([]);

it('Rendering the passed text', () => {
  const state = {};
  const store = mockStore(state);

  const { getByTestId } = render(
    <Provider store={store}>
      <MenuItem name="desktop" text="desktop" />
    </Provider>
  );

  expect(getByTestId('menuItemText')).toHaveTextContent('desktop');
});
