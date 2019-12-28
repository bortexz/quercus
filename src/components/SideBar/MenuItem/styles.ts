import styled from 'styled-components';

interface MenuItemProps {
  active: boolean;
}

export const MenuItem = styled.h3<MenuItemProps>`
  cursor: pointer;
  font-weight: normal;
  margin: 0;
  padding: 0.5em 1em;
  color: ${props => (props.active ? '#d605e4' : '#fff')};
  :hover {
    background-color: #d605e4;
    user-select: none;
    color: ${props => (props.active ? '#000' : '#fff')};
  }

  > svg {
    width: 0.8em;
    height: 0.8em;
    margin-right: 0.5em;
  }
`;
