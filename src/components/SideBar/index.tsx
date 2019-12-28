import React from 'react';

import { defaultSideBarOptions } from '../../constants/sideBar';
import Icon from '../Icon';
import { SideBar as StyledSideBar, MenuItem } from './styles';

const SideBar: React.FC = () => {
  return (
    <StyledSideBar>
      {defaultSideBarOptions.map(item => (
        <MenuItem key={item.name}>
          <Icon type={item.name} />
          <span>{item.text}</span>
        </MenuItem>
      ))}
    </StyledSideBar>
  );
};

export default SideBar;
