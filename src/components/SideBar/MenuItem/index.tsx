import { connect } from 'react-redux';
import React from 'react';

import { App } from '../../../types/state';
import Icon from '../../Icon';
import { setCurrentPath } from '../../../actions/sideBar';
import { MenuItem as StyledMenuItem } from './styles';

interface Props {
  name: string;
  text: string;
  path: string;
  currentPath: string;
  _setCurrentPath: Function;
}

const MenuItem: React.FC<Props> = ({
  name,
  path,
  text,
  currentPath,
  _setCurrentPath,
}) => {
  return (
    <StyledMenuItem
      onClick={() => _setCurrentPath(path)}
      key={name}
      active={path === currentPath}
    >
      <Icon type={name} />
      <span>{text}</span>
    </StyledMenuItem>
  );
};

const mapStateToProps = (app: App) => ({
  currentPath: app.currentPath,
});

export default connect(mapStateToProps, { _setCurrentPath: setCurrentPath })(
  MenuItem
);
