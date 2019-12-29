import { connect } from 'react-redux';
import React, { useMemo, useCallback } from 'react';

import { App } from '../../../types/state';
import Icon from '../../Icon';
import { getPath } from '../../../utils';
import { setCurrentPath } from '../../../actions/sideBar';
import { MenuItem as StyledMenuItem } from './styles';

interface Props {
  name: string;
  text: string;
  currentPath: string;
  _setCurrentPath: Function;
}

const MenuItem: React.FC<Props> = ({
  name,
  text,
  currentPath,
  _setCurrentPath,
}) => {
  const path = useMemo(() => getPath(name), [name]);

  const handleNavigate = useCallback(() => {
    if (currentPath !== path) {
      _setCurrentPath(path);
    }
  }, [path, currentPath, _setCurrentPath]);

  return (
    <StyledMenuItem
      onClick={handleNavigate}
      key={name}
      active={path === currentPath}
    >
      <Icon type={name} />
      <span data-testid="menuItemText">{text}</span>
    </StyledMenuItem>
  );
};

const mapStateToProps = (app: App) => ({
  currentPath: app.currentPath,
});

export default connect(mapStateToProps, { _setCurrentPath: setCurrentPath })(
  MenuItem
);
