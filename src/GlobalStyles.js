import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    /*@font-face {
        font-family: 'big_noodle_titling_oblique';
        src: url('./fonts/big_noodle_titling_oblique.tff');
        font-family: 'big_noodle_titling';
        src: url('./fonts/big_noodle_titling.tff');
        font-family: 'theboldfont';
        src: url('./fonts/theboldfont.tff');
    }*/

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box; 
    }

    html, body, #root{
         height: 100%;
         width: 100%;
    }

    body{
        
    }
`;