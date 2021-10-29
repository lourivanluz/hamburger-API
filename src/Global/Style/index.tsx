import { createGlobalStyle } from "styled-components";

export const ResetCss = createGlobalStyle`
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
    font-family: var(--font-primary);
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
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

button{
    cursor: pointer;
}

img{
    display: block;
    max-width: 100%;
}

:root{

    --color-primary:  #24AE60;
    --color-secondary:#eb5757;

    --grey0:          #f5f5f5;
    --grey1:          #e0e0e0;
    --grey3:          #828282;
    --grey6:          #333333;

    --negativeColor:  #e60000;
    --warningColor:   #ffcd07;
    --sucess:         #168821;
    --information:    #155bcb;

    --font-primary: 'Inter', sans-serif;
}

`;
