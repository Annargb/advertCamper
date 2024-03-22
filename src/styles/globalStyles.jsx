import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import InterRegular from '../fonts/Inter-Regular.ttf';
import InterMedium from '../fonts/Inter-Medium.ttf';
import InterSemiBold from '../fonts/Inter-SemiBold.ttf';
import 'react-perfect-scrollbar/dist/css/styles.css';

export const GlobalStyle = createGlobalStyle`


    @font-face {
        font-family: 'InterRegular';
        src: local('InterRegular'),
        url(${InterRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterMedium';
        src: local('InterMedium'),
        url(${InterMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterSemiBold';
        src: local('InterSemiBold'),
        url(${InterSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }
   
body {
  margin: 0; 
  padding: 0;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: 'Inter', sans-serif;
}

a {
    text-decoration: none;
  }

p {
    padding: 0;
    margin: 0;
}


ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

///
li {
  list-style: none; 
}
///

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  /* max-width: 100%; */
  width: 100%;
  height: auto;
}

input, textarea, select, button {
  font: inherit;
}

button {
    cursor: pointer;
    border: none;

  }

.scrollbar-container {
/* padding-right: 10px; */
  }

.ps--active-x > .ps__rail-x {
  display: none; 
}

.ps__thumb-x {
 display: none;
}

.ps__rail-y {
  border-radius: 7px; 
  /* width: 7px;  */
  right: -6px;
}

.ps__thumb-y {
  position: absolute;
  width: 8px; 
  background: #d9d9d9; 
  /* height: 264px;  */
    /* right: -16px; */
}

.ps__rail-y {
  height: 264px; 

}
`;
