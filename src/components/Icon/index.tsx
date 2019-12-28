import React from 'react';

import Desktop from './Desktop';
import Download from './Download';
import Home from './Home';
import Image from './Image';
import Recent from './Recent';
import Trash from './Trash';

interface Props {
  type: string;
}

const Icon: React.FC<Props> = ({ type }) => {
  switch (type) {
    case 'desktop':
      return <Desktop />;
    case 'download':
      return <Download />;
    case 'home':
      return <Home />;
    case 'image':
      return <Image />;
    case 'recent':
      return <Recent />;
    case 'trash':
      return <Trash />;
    default:
      return <></>;
  }
};

export default Icon;
