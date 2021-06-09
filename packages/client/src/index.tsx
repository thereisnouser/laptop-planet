import { React, ReactDOM, BrowserRouter, App, ThemeProvider, muiconfig } from 'imports';

ReactDOM.render(
  <ThemeProvider theme={muiconfig}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
