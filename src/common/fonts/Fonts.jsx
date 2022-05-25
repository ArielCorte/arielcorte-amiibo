import { createGlobalStyle } from 'styled-components'
import MuseoSans_woff2_700 from 'museo-sans-700.woff2'
import MuseoSans_woff2_300 from 'museo-sans-300.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'museo-sans';
        src: local('museo-sans'), url(${MuseoSans_woff2_300}) format("woff2");
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'museo-sans';
        src: local('museo-sans'), url(${MuseoSans_woff2_700}) format("woff2");
        font-weight: 700;
        font-style: normal;
    }
`
