// import { createGlobalStyle } from 'styled-components';

// export default createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   @media (max-width: 1080px) {
//     html {
//       font-size: 93.75%;
//     }
//   }

//   @media (max-width: 720px) {
//     html {
//       font-size: 87.5%;
//     }
//   }

//   body {
//     background: var(--gray-900);
//     color: var(--white);
//   }

//   body, input, textarea, select, button {
//     font: 400 1rem "Roboto", sans-serif;
//   }

//   button {
//     cursor: pointer;
//   }

//   a {
//     color: inherit;
//     text-decoration: none;
//   }
// `;

export const theme = {
  styles: {
    global: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      body: {
        background: '#faf8f5',
        color: '#3e3e3e',
      },
      'body, input, textarea, select, button': {
        font: '400 1rem "Roboto", sans-serif',
      },
      button: {
        cursor: 'pointer',
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      '@media (max-width: 1920px)': {
        html: {
          fontSize: '93.75%',
        },
      },
      '@media (max-width: 1080px)': {
        html: {
          fontSize: '93.75%',
        },
      },
      '@media (max-width: 720px)': {
        html: {
          fontSize: '87.5%',
        },
      },
    },
  },
};
