import { React, ReactDOM, App, ThemeProvider, muiconfig } from './imports';

ReactDOM.render(
  <ThemeProvider theme={muiconfig}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
