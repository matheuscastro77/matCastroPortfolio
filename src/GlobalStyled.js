import { createGlobalStyle } from 'styled-components'
export const GlobalStyled = createGlobalStyle `
 
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        ::-webkit-scrollbar-track {
            background-color: #3F3D56;
            
          }
          ::-webkit-scrollbar {
            width: 14px;
          }
          ::-webkit-scrollbar-thumb {
            background: #E6E6E6;
          }
    }
`