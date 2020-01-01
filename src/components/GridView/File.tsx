import React, { useMemo } from 'react';

import FileIcon from './FileIcon';
import { Item as StyledItem } from './styles';

interface Props {
  name: string;
}

const File: React.FC<Props> = ({ name }) => {
  const fileType: string = useMemo(() => {
    const extension = (name || '').split('.').pop();
    return extension ? extension : 'file';
  }, [name]);

  return (
    <StyledItem title={name}>
      <FileIcon type={fileType} />
      <h4>{name}</h4>
    </StyledItem>
  );
};

export default File;
