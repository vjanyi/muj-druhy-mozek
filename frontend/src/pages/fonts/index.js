import LouisvilleWoff from './Louisville.woff';
import LouisvilleBoldWoff from './LouisvilleBold.woff';

const louisvilleFonts = `
@font-face {
  font-family: 'Louisville';
  src: url(${LouisvilleWoff}) format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Louisville';
  src: url(${LouisvilleBoldWoff}) format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
`;

export default louisvilleFonts;
