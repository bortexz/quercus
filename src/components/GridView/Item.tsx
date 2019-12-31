import React from 'react';

import { Item as StyledItem } from './styles';
import Type from './Type';

interface Props {
  name: string;
  type: string;
}

const Item: React.FC<Props> = ({ name, type }) => {
  return (
    <StyledItem>
      <Type name={name} type={type} />
      <h4>{name}</h4>
    </StyledItem>
  );
};

export default Item;
