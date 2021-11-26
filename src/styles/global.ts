// import { createGlobalStyle } from 'styled-components';

// export default createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

// :root {
//   --white: #FFFFFF;
//   --shaded-white: #faf8f5;
//   --black: #3e3e3e;

//   --gray-100: #e1e1e6;
//   --gray-300: #a8a8b3;
//   --gray-700: #323238;
//   --gray-800: #29292e;
//   --gray-850: #1f2729;
//   --gray-900: #121214;

//   --cyan-500: #61dafb;
//   --yellow-500: #eba417;

//   --light-green: #53ddbd;
//   --dark-green: #1a6050;

// }

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
