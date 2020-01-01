import React from 'react';

import File from './File';
import Folder from './Folder';

interface Props {
  name: string;
  type: string;
}

const Item: React.FC<Props> = ({ name, type }) => {
  if (type === 'folder') {
    return <Folder name={name} />;
  }

  return <File name={name} />;
};

export default Item;
