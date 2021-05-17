import {
  React, ReactDOM, App,
  ThemeProvider,
  muiconfig,
  BrowserRouter,
} from './imports';

ReactDOM.render((
  <ThemeProvider theme={muiconfig}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
), document.getElementById('root'));
