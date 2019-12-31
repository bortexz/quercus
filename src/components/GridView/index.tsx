import { connect } from 'react-redux';
import React from 'react';

import { App, FolderContent } from '../../types/state';
import { GridView as StyledGridView } from './styles';
import Item from './Item';

interface Props {
  folderContent: FolderContent;
}

const GridView: React.FC<Props> = ({ folderContent }) => {
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

export default connect(mapStateToProps)(GridView);
