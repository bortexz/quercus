import React from 'react';

import { defaultSideBarOptions } from '../../constants/sideBar';
import MenuItem from './MenuItem';
import { SideBar as StyledSideBar } from './styles';

const SideBar: React.FC = () => {
  return (
    <StyledSideBar>
      {defaultSideBarOptions.map(item => (
        <MenuItem key={item.name} name={item.name} text={item.text} />
      ))}
    </StyledSideBar>
  );
};

export default SideBar;
