import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        font-weight: 900;
        font-display: swap;
        src: local('Pretendard Black'), url(/src/assets/fonts/Pretendard-Black.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 800;
        font-display: swap;
        src: local('Pretendard ExtraBold'), url(/src/assets/fonts/Pretendard-ExtraBold.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 700;
        font-display: swap;
        src: local('Pretendard Bold'), url(/src/assets/fonts/Pretendard-Bold.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 600;
        font-display: swap;
        src: local('Pretendard SemiBold'), url(/src/assets/fonts/Pretendard-SemiBold.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 500;
        font-display: swap;
        src: local('Pretendard Medium'), url(/src/assets/fonts/Pretendard-Medium.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 400;
        font-display: swap;
        src: local('Pretendard Regular'), url(/src/assets/fonts/Pretendard-Regular.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 300;
        font-display: swap;
        src: local('Pretendard Light'), url(/src/assets/fonts/Pretendard-Light.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 200;
        font-display: swap;
        src: local('Pretendard ExtraLight'), url(/src/assets/fonts/Pretendard-ExtraLight.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 100;
        font-display: swap;
        src: local('Pretendard Thin'), url(/src/assets/fonts/Pretendard-Thin.woff2) format('woff2');
    }
    
    /* http://meyerweb.com/eric/tools/css/reset/
       v2.0 | 20110126
       License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
        font-family: 'Pretendard', sans-serif;
        ::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera*/
        }

    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a {
        color: black;
        text-decoration: none;
    }
    
    button {
        display: block;
        cursor: pointer;
        border: none;
        background: none;
    }
    
    input:focus {
        outline: none;
    }

    :root{
        // Colors
        --color-darkgray: #535353;
        --color-lightgray: #B4B8BD;
        // --color-blue: #5A81FF;
        --color-blue: #5398FF;
        --color-white: #FFFFFF;

        // Font size
        --font-large: 26px;
        --font-medium: 20px;
        --font-regular: 16px;
        --font-small: 14px;
        --font-semi-micro: 12px;
        --font-micro: 10px;

        // Font weight
        --weight-extra-bold: 800;
        --weight-bold: 700;
        --weight-semi-bold: 600;
        --weight-medium: 500;
        --weight-regular: 400;
        --weight-light: 300;

    }
`;

export default GlobalStyle;
