import React from 'react';

import GlobalStyle from '../../styles';
import SideBar from '../SideBar';
import GridView from '../GridView';
import { App as StyledApp } from './styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <SideBar />
        <GridView />
      </StyledApp>
    </>
  );
};

export default App;
