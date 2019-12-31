import styled from 'styled-components';

export const GridView = styled.div`
  padding: 1.5em 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10em, 1fr));
`;

export const Item = styled.div`
  > h4 {
    max-width: 10em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.8rem;
  }
`;
