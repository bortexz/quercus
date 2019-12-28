import styled from 'styled-components';

export const SideBar = styled.div`
  background-color: #181818;
  padding-top: 1em;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 8rem;
`;

export const MenuItem = styled.h3`
  cursor: pointer;
  font-weight: normal;
  margin: 0;
  padding: 0.5em 1em;
  :hover {
    background-color: #d605e4;
    user-select: none;
  }

  > svg {
    width: 0.8em;
    height: 0.8em;
    margin-right: 0.5em;
  }
`;
