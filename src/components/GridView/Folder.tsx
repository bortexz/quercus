import { connect } from 'react-redux';
import React, { useCallback } from 'react';

import { App } from '../../types/state';
import { setCurrentPath } from '../../actions/sideBar';
import Icon from '../Icon';
import { Folder as StyledFolder } from './styles';

const path = window.require('path');

interface Props {
  currentPath: string;
  name: string;
  _setCurrentPath: Function;
}

const Folder: React.FC<Props> = ({ currentPath, name, _setCurrentPath }) => {
  const navigateInto = useCallback(() => {
    _setCurrentPath(path.join(currentPath, name));
  }, [currentPath, name, _setCurrentPath]);

  return (
    <StyledFolder title={name} onClick={navigateInto}>
      <Icon type="folder" />
      <h4>{name}</h4>
    </StyledFolder>
  );
};

const mapStateToProps = (app: App) => ({
  currentPath: app.currentPath,
});

export default connect(mapStateToProps, { _setCurrentPath: setCurrentPath })(
  Folder
);
