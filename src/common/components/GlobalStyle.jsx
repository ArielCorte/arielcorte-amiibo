import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root{
    --highlight-color: #e60012;
    --primary-color: #ffffff;
    --secondary-color: #484848;

    --highlight-color-active: #ac000d;

    --subtle-color: #dadada;
    --light-subtle-color: #f8f8f8;

    --figure-color: #fc948c;
    --band-color: #8cd5fc;
    --card-color: #e28cfc;
}

body{
        margin: 0;
        background-color: var(--primary-color);
        color: var(--secondary-color);
    }
    * {
        margin: 0;
        padding: 0;
        font-family: 'museo-sans', 'sans-serif';
        font-weight: 300;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0,0,0,0)
    }

    a {
        text-decoration: none;
        color: var(--primary-color);
    }
`

export default GlobalStyle
