import React from 'react';

import GlobalStyle from '../../styles';
import SideBar from '../SideBar';
import { App as StyledApp } from './styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <SideBar data-testid="sidebar" />
      </StyledApp>
    </>
  );
};

export default App;
