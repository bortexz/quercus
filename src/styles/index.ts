import { createGlobalStyle } from 'styled-components';

import * as colors from './colors';

const GlobalStyle = createGlobalStyle`
 body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    width: 100%;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    background: ${colors.PRIMARY};
    color:${colors.PRIMARY_TEXT};
   }
`;

export default GlobalStyle;
