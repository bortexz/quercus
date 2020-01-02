import styled from 'styled-components';

export const GridView = styled.div`
  padding: 1.5em 2em;
`;

export const Item = styled.div`
  float: left;
  display: grid;
  justify-content: center;
  align-items: center;
  height: 85px;
  width: 85px;
  > svg {
    height: 40px;
    margin: 10px auto;
    width: 40px;
  }

  > h4 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.8rem;
    margin: 0;
    text-align: center;
    width: 74px;
  }
`;
