import React from 'react';

interface Props {
  name: string;
  type: string;
}

const Type: React.FC<Props> = ({ name, type }) => {
  if (type === 'folder') {
    return <div>folder</div>;
  }
  return <div>file</div>;
};
export default Type;
