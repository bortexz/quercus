import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import GridView from '../index';
const { listFilesResponse } = require('../../../__mock__/api');

afterEach(cleanup);

const mockStore = configureStore([]);

jest.mock('../../../utils', () => {
  return {
    getPath: (name: string) => name,
  };
});

jest.mock('../Item', () => {
  const Item = ({ name }: { name: string }) => (
    <div data-testid={name}>{name}</div>
  );

  return Item;
});

it('Renders folder contents in grid', () => {
  const state = {
    folderContent: listFilesResponse,
  };

  const store = mockStore(state);

  const { getByTestId } = render(
    <Provider store={store}>
      <GridView />
    </Provider>
  );

  for (const item of listFilesResponse) {
    // Check if that grid element is rendered
    expect(getByTestId(item.name)).toHaveTextContent(item.name);
  }
});
