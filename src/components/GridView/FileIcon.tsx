import React from 'react';

import Icon from '../Icon';

interface Props {
  type: string;
}

const FileIcon: React.FC<Props> = ({ type }) => {
  switch (type) {
    case 'png':
    case 'jpg':
    case 'webp':
      return <Icon type="image" />;
    case 'mp4':
    case 'avi':
      return <Icon type="video" />;
    case 'pdf':
      return <Icon type="pdf" />;
    default:
      return <Icon type="file" />;
  }
};

export default FileIcon;
