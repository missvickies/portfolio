import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Josefin Sans';
    src: url('/static/JosefinSans-Regular.ttf');
 }

 @font-face {
    font-family: 'Josefin Sans';
    src: url('/static/JosefinSans-Bold.ttf');
    font-weight: bold;
 }

 @font-face {
    font-family: 'Playfair Display';
    src: url('/static/PlayfairDisplay-Regular.ttf');
 }

 body {
   background: green;
 }

 *,
 *:before,
 *:after {
   box-sizing: border-box;
   margin: 0;
 }

 h1,
 h2,
 h3,
 h4 {
   font-family: 'Playfair Display', serif;
   font-weight: normal;
 }
`;
