import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import { App, FolderContent } from '../../types/state';
import { setCurrentPath } from '../../actions/sideBar';
import { getPath } from '../../utils';
import { GridView as StyledGridView } from './styles';
import Item from './Item';
interface Props {
  folderContent: FolderContent;
  _setCurrentPath: Function;
}

const GridView: React.FC<Props> = ({ folderContent, _setCurrentPath }) => {
  useEffect(() => {
    _setCurrentPath(getPath('home'));
  }, []);

  return (
    <StyledGridView>
      {folderContent.map(child => (
        <Item key={child.name} name={child.name} type={child.type} />
      ))}
    </StyledGridView>
  );
};

const mapStateToProps = (app: App) => ({
  folderContent: app.folderContent,
});

export default connect(mapStateToProps, {
  _setCurrentPath: setCurrentPath,
})(GridView);
