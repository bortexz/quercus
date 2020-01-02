import styled from 'styled-components';

export const GridView = styled.div`
  padding: 1.5em 2em;
`;

export const Item = styled.div`
  float: left;
  display: grid;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 90px;
  > svg {
    height: 40px;
    width: 40px;
    margin: 10px auto;
    margin-bottom: 0;
  }

  > h4 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 0.8rem;
    margin: 0;
    text-align: center;
    width: 74px;
    word-break: break-all;
    height: 1.6rem;
  }

  :hover {
    > svg > path {
      fill: #fff;
    }
  }
`;

export const Folder = styled(Item)`
  :hover {
    > svg > path {
      fill: #616161;
    }
  }
`;
