import React from 'react';

import Folder from './Folder';
import Desktop from './Desktop';
import Download from './Download';
import Home from './Home';
import Image from './Image';
import Pdf from './Pdf';
import Recent from './Recent';
import Trash from './Trash';
import File from './File';
import Video from './Video';

interface Props {
  type: string;
}

const Icon: React.FC<Props> = ({ type }) => {
  switch (type) {
    case 'desktop':
      return <Desktop />;
    case 'download':
      return <Download />;
    case 'file':
      return <File />;
    case 'folder':
      return <Folder />;
    case 'home':
      return <Home />;
    case 'image':
      return <Image />;
    case 'pdf':
      return <Pdf />;
    case 'recent':
      return <Recent />;
    case 'trash':
      return <Trash />;
    case 'video':
      return <Video />;
    default:
      return <></>;
  }
};

export default Icon;
