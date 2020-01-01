import styled from 'styled-components';

export const GridView = styled.div`
  padding: 1.5em 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8em, 1fr));
  grid-gap: 10px;
`;

export const Item = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 5em;
  > svg {
    height: 3em;
    width: 3em;
  }

  > h4 {
    width: 5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.8rem;
    margin: 0;
    text-align: left;
  }
`;
