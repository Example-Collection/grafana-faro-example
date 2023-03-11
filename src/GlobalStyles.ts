import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    body {
        background-color: #0d1117;
        padding: 10px;
        color: #c9d1d9;
    }
`;

export default GlobalStyles;
